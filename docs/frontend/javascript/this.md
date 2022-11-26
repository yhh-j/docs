---
sidebarDepth: 2
---

# this
` this` 关键字在 JavaScript 中的概念与其他语言相比略有不同，此外，在严格模式和非严格模式之间也会有一些差别。

函数的调用方式决定了 `this` 的值（运行时绑定）。

## 示例

### 1.全局上下文

无论是否在严格模式下，在全局执行环境中（在任何函数体外部）`this` 都指向全局对象。


### 2.函数上下文中的 this

```js
var obj = {a: 'Custom'};
var a = 'Global';

function f() {
  return this.a;  // this 的值取决于函数被调用的方式
}

var obj ={
    prop:3,
    f:function(){
        return this.prop;
    }
};

f();  // 'Global'  this默认为全局对象
f.call(obj);  // 'Custom'  函数中的 this 被设置为 obj
f.apply(obj); // 'Custom'  函数中的 this 被设置为 obj
obj.f()   //3  this被设置为 obj



var g = f.bind({a:"azerty"});
console.log(g()); // azerty

var h = g.bind({a:'yoo'}); // bind 只生效一次！
console.log(h()); // azerty
```

1. 在严格模式下,如果进入执行环境时没有设置 `this` 的值，`this` 会保持为 `undefined`。不在严格模式下，`this` 的值默认指向全局对象。
2. 当函数作为对象里的方法被调用时，`this` 被设置为调用该函数的对象。
3. `bind`方法：`this`将永久地被绑定到了`bind`的第一个参数，无论这个函数是如何被调用的。


### 3.箭头函数

在箭头函数中，`this`与封闭词法环境的`this`保持一致。
```js
// 创建一个含有 bar 方法的 obj 对象，
// bar 返回一个函数，
// 这个函数返回 this，
// 这个返回的函数是以箭头函数创建的，
// 所以它的 this 被永久绑定到了它外层函数的 this。
// bar 的值可以在调用中设置，这反过来又设置了返回函数的值。
var obj = {
  bar: function() {
    var x = (() => this);
    return x;
  }
};

// 作为 obj 对象的一个方法来调用 bar，把它的 this 绑定到 obj。
// 将返回的函数的引用赋值给 fn。
var fn = obj.bar();

// 直接调用 fn 而不设置 this，
// 通常 (即不使用箭头函数的情况) 默认为全局对象
// 若在严格模式则为 undefined
console.log(fn() === obj); // true

// 但是注意，如果你只是引用 obj 的方法，
// 而没有调用它
var fn2 = obj.bar;
// 那么调用箭头函数后，this 指向 window，因为它从 bar 继承了 this。
console.log(fn2()() == window); // true
```