---
sidebarDepth: 2
---

# 数组

## 方法

### Array.prototype.at()

`at()` 方法接**收一个整数值并返回该索引对应的元素**，允许正数和负数。负整数从数组中的最后一个元素开始倒数。如果找不到指定的索引，则返回 `undefined`。

>at() 方法是通用的。其仅期望 this 具有 length 属性和以整数为键的属性。 -->

#### 语法
```js
at(index)
```

#### 示例
1. 返回数组的最后一个值
```js
// 数组及数组元素
const cart = ['apple', 'banana', 'pear'];

// 一个函数，用于返回给定数组的最后一个元素
function returnLast(arr) {
  return arr.at(-1);
}

// 获取 'cart' 数组的最后一个元素
const item1 = returnLast(cart);
console.log(item1); // 输出：'pear'

// 在 'cart' 数组中添加一个元素
cart.push('orange');
const item2 = returnLast(cart);
console.log(item2); // 输出：'orange'
```

2. 比较不同的数组方法

凸显了 `at()` 方法的简洁性和可读性。
```js
// 数组及数组元素
const colors = ['red', 'green', 'blue'];

// 使用长度属性
const lengthWay = colors[colors.length-2];
console.log(lengthWay); // 输出：'green'

// 使用 slice() 方法。注意会返回一个数组
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // 输出：'green'

// 使用 at() 方法
const atWay = colors.at(-2);
console.log(atWay); // 输出：'green'
```

3. 在非数组对象上调用`at()`

 `at()` 方法读取 `this` 的 `length` 属性并计算需要访问的索引。
```js
const arrayLike = {
  length: 2,
  0: "a",
  1: "b",
};
console.log(Array.prototype.at.call(arrayLike, -1)); // "b"
```


### Array.prototype.concat()
`concat()` 方法用于**合并两个或多个数组**。此方法不会更改现有数组，而是**返回一个新数组**。
>concat 方法不会改变 this 或任何作为参数提供的数组，而是返回一个浅拷贝它包含与原始数组相结合的相同元素的副本。对象引用（而不是实际对象）：concat 将对象引用复制到新数组中。原始数组和新数组都引用相同的对象。也就是说，如果引用的对象被修改，则更改对于新数组和原始数组都是可见的。这包括也是数组的数组参数的元素。

#### 语法
```js
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, /* … ,*/ valueN)
```

#### 示例
1. 连接三个数组
```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

2. 合并嵌套数组
```js
const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]

// 修改 num1 的第一个元素
num1[0].push(4);

console.log(numbers);
// results in [[1, 4], 2, [3]]
```

3. 使用 `Symbol.isConcatSpreadable` 合并类数组对象

`concat` 默认情况下不会将类数组对象视作数组——仅在 `Symbol.isConcatSpreadable` 被设置为真值（例如，`true`）时才会将类数组对象视作数组。
```js
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
```

## Array.prototype.copyWithin()
`copyWithin()` 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它（改变后的数组），不会改变原数组的长度。
>copyWithin 函数被设计为通用式的，其不要求其 this 值必须是一个数组对象。

copyWithin 是一个可变方法，它不会改变 this 的长度 length，但是会改变 this 本身的内容，且需要时会创建新的属性。

#### 语法
```js
copyWithin(target)    
copyWithin(target, start)   
copyWithin(target, start, end)   
```
`target`复制序列到该位置,`start`开始复制元素的起始位置,`end`开始复制元素的结束位置。

#### 示例
```js
[1, 2, 3, 4, 5].copyWithin(-2)
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1)
// [1, 2, 3, 3, 4]

[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}

// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```


### Array.prototype.entries()
`entries()` 方法**返回一个新的数组迭代器对象**，该对象包含数组中每个索引的键/值对。
>entries() 方法是通用的。它只要求 this 值具有 length 属性和以整数为键的属性。

#### 示例
1. 使用 for...of 循环
```js
const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']
```

2. 迭代稀疏数组

`entries()` 将访问空槽，就像它们是 `undefined` 一样。
```js
for (const element of [, "a"].entries()) {
  console.log(element);
}
// [0, undefined]
// [1, 'a']
```

3.在非数组对象上调用 entries()


`entries()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。
```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};
for (const entry of Array.prototype.entries.call(arrayLike)) {
  console.log(entry);
}
// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]
```

### Array.prototype.every()
`every()` 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

#### 示例
1. 检测所有数组元素的大小
```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### Array.prototype.fill()
`fill() `方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
>1. fill 方法故意被设计成通用方法，该方法不要求 this 是数组对象。
>2. fill 方法是个可变方法，它会改变调用它的 this 对象本身，然后返回它，而并不是返回一个副本。
>3. 当一个对象被传递给 fill 方法的时候，填充数组的是这个对象的引用。

#### 语法
```js
fill(value)
fill(value, start)
fill(value, start, end)
```

#### 示例
```js
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}


// Objects by reference.
const arr = Array(3).fill({}) // [{}, {}, {}];
// 需要注意如果 fill 的参数为引用类型，会导致都执行同一个引用类型
// 如 arr[0] === arr[1] 为 true
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

### Array.prototype.filter()
`filter()` 方法创建给定数组一部分的浅拷贝，其包含通过所提供函数实现的测试的所有元素。
>filter() 不会改变原数组。

#### 示例
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

### Array.prototype.find()
`find()` 方法返回数组中满足提供的测试函数的第一个元素的**值**。否则返回 `undefined`。

#### 示例
```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
```

### Array.prototype.findIndex()
`findIndex()`方法**返回数组中满足提供的测试函数的第一个元素的索引**。若没有找到对应元素则返回 -1。

#### 示例
```js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
```

### Array.prototype.findLast()
`findLast()` 方法返回数组中满足提供的测试函数条件的最后一个元素的**值**。如果没有找到对应元素，则返回 undefined。

#### 示例
```js
const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);
```

### Array.prototype.findLastIndex()
`findLastIndex()` 方法返回数组中满足提供的测试函数条件的最后一个元素的**索引**。若没有找到对应元素，则返回 -1。

#### 示例
```js
const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
// expected output: 3  (of element with value: 130)
```

### Array.prototype.flat()
`flat()` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

#### 示例
```js
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
```

### Array.prototype.flatMap()
`flatMap()` 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 `map` 连着深度值为 1 的 `flat` 几乎相同，但 `flatMap` 通常在合并成一种方法的效率稍微高一些。

#### 示例
```js
const arr1 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr1.flatMap(num => num);

console.log(flattened);
// expected output: Array [1, 2, 3, 4, 5, 6]
```

### Array.prototype.forEach()
`forEach()` 方法对数组的每个元素执行一次给定的函数。

#### 示例
```js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
```

### Array.from()
`Array.from()` 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

#### 示例

```js
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```