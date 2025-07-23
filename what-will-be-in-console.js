// 1 CONDITION

// console.log(typeof f1);
// console.log(typeof f2);
// console.log(typeof f3);

// function f1() {}
// var f2 = function () {};
// let f3 = function () {};

// 2 CONDITION

// var o = {};
// var a = [];

// console.log(o == a);
// console.log(o === a);
// console.log(typeof o == typeof a);
// console.log(typeof o === typeof a);

// 3 CONDITION

// function Constructor1() {}
// var Constructor2 = function () {};
// var Constructor3 = () => {};

// console.log(new Constructor1());
// console.log(new Constructor2());
// console.log(new Constructor3());

// SOLUTION

// console.log(new Constructor1()); // OK // Constructor1 {}
// console.log(new Constructor2()); // OK // Constructor2 {}
// console.log(new Constructor3()); // TypeError // We can't use arrow func as a constructor

// 4 CONDITION

// function Constructor() {}
// var o = new Constructor();

// console.log(o.__proto__ === Constructor.prototype);
