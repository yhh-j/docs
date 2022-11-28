---
sidebarDepth: 2
---
# JavaScript 标准内置对象

## Array

### Array.prototype.at()
`at()` 方法接**收一个整数值并返回该索引对应的元素**，允许正数和负数。负整数从数组中的最后一个元素开始倒数。如果找不到指定的索引，则返回 `undefined`。

>at() 方法是通用的。其仅期望 this 具有 length 属性和以整数为键的属性。

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

### Array.prototype.includes()
`includes() `方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。
>includes() 方法有意设计为通用方法。它不要求this值是数组对象，所以它可以被用于其他类型的对象 (比如类数组对象)。

#### 语法
```js
includes(searchElement)
includes(searchElement, fromIndex)
```
`searchElement`需要查找的元素值,从`fromIndex` 索引处开始查找 `searchElement`。

#### 示例
```js
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
```


### Array.prototype.indexOf()
`indexOf()` 方法返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回 -1。`indexOf` 使用全等运算（===）。

#### 语法
```js
includes(searchElement)
includes(searchElement, fromIndex)
```

#### 示例
```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
```
### Array.isArray()
`Array.isArray() `用于确定传递的值是否是一个 `Array`。如果值是 `Array`，则为 `true`；否则为 `false`。

#### 示例
```js
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
```

### Array.prototype.join()
`join()`方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符。

#### 示例
```js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

### Array.prototype.keys()
`keys()`方法返回一个包含数组中每个索引键的 `Array Iterator` 对象。返回值是一个新的 `Array` 迭代器对象。

#### 示例
```js
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// expected output: 0
// expected output: 1
// expected output: 2
```

### Array.prototype.lastIndexOf()
`lastIndexOf()` 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 `fromIndex` 处开始。

#### 示例
```js
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1
```

### Array.prototype.map()
`map()`方法**创建一个新数组**，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

#### 示例
```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

### Array.of()
`Array.of()`方法通过可变数量的参数创建一个新的 Array 实例，而不考虑参数的数量或类型。
>Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个 length 为 7 的空数组（这意味着一个由 7 个空槽组成的数组，而不是具有实际 undefined 值的槽）。

#### 示例
```js
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3);    // [1, 2, 3]
```

### Array.prototype.pop()
`pop()` 方法从数组中删除**最后**一个元素，并**返回该元素的值**。此方法会更改数组的长度。

#### 示例
```js
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin']

console.log(popped); // 'sturgeon'
```

### Array.prototype.push()
`push()` 方法将一个或多个元素添加到数组的**末尾**，并返回该数组的**新长度**。

#### 示例
```js
var sports = ["soccer", "baseball"];
var total = sports.push("football", "swimming");

console.log(sports);
// ["soccer", "baseball", "football", "swimming"]

console.log(total);
// 4
```

### Array.prototype.reduce()
`reduce()` 方法对数组中的每个元素按序执行一个由您提供的 `reducer` 函数，每一次运行 `reducer` 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

#### 示例
```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
```

### Array.prototype.reduceRight()
`reduceRight()` 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。

#### 示例
```js
const array1 = [[0, 1], [2, 3], [4, 5]];

const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(result);
// expected output: Array [4, 5, 2, 3, 0, 1]
```

### Array.prototype.reverse()
`reverse()` 方法将数组中**元素的位置颠倒，并返回该数组**。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。

#### 示例
```js
const a = [1, 2, 3];

console.log(a); // [1, 2, 3]

a.reverse();

console.log(a); // [3, 2, 1]
```

### Array.prototype.shift()
`shift()` 方法从数组中删除**第一个**元素，并返回该元素的值。此方法**更改数组的长度**。

#### 示例
```js
let myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('调用 shift 之前：' + myFish);
// "调用 shift 之前：angel,clown,mandarin,surgeon"

var shifted = myFish.shift();

console.log('调用 shift 之后：' + myFish);
// "调用 shift 之后：clown,mandarin,surgeon"

console.log('被删除的元素：' + shifted);
// "被删除的元素：angel"
```

### Array.prototype.slice()
`slice()` 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。**原始数组不会被改变**。

#### 示例
```js
console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

### Array.prototype.some()
`some()` 方法测试数组中是不是至少有 1 个元素通过了被提供的函数测试。它返回的是一个 `Boolean` 类型的值。

#### 示例
```js
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
```

### Array.prototype.sort()
`sort()` 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的 UTF-16 代码单元值序列时构建的
由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。

### Array.prototype.splice()
splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法**会改变原数组**。

#### 语法
```js
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
```
start​指定修改的开始位置（从 0 计数)；deleteCount （可选）整数，表示要移除的数组元素的个数（deleteCount 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。）；item1, item2, ... （可选）要添加进数组的元素。

#### 示例
```js
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

### Array.prototype.toLocaleString()
· 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 · 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。

### Array.prototype.toString()
`toString()` 方法返回一个字符串，表示指定的数组及其元素。

#### 示例
```js
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"
```

### Array.prototype.unshift()
`unshift()` 方法将一个或多个元素添加到数组的**开头**，并返回该数组的**新长度**。

#### 示例
```js
const arr = [1, 2];

arr.unshift(0);               // 调用的结果是 3，这是新的数组长度
// arr is [0, 1, 2]

arr.unshift(-2, -1);          // 新的数组长度为 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]);        // 新的数组长度为 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]);  // 新的数组长度为 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
```

### Array.prototype.values()
`values()` 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的**值**。

#### 示例
```js
const arr = ['a', 'b', 'c', 'd', 'e'];
const iterator = arr.values();

for (const letter of iterator) {
  console.log(letter);
}  //"a" "b" "c" "d" "e"
```
