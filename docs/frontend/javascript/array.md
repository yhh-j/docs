---
sidebarDepth: 2
---

# 数组

## 方法

### Array.prototype.at()

`at()` 方法接**收一个整数值并返回该索引对应的元素**，允许正数和负数。负整数从数组中的最后一个元素开始倒数。如果找不到指定的索引，则返回 `undefined`。

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
>对象引用（而不是实际对象）：`concat` 将对象引用复制到新数组中。原始数组和新数组都引用相同的对象。也就是说，如果引用的对象被修改，则更改对于新数组和原始数组都是可见的。这包括也是数组的数组参数的元素。

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
`copyWithin()` 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。

#### 语法
```js
copyWithin(target)
copyWithin(target, start)
copyWithin(target, start, end)
```

#### 示例