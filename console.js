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






// 4 CONDITION

// function Constructor() {}
// var o = new Constructor();

// console.log(o.__proto__ === Constructor.prototype);







// 5 CONDITION

// let x = 1;

// const logToConsole = function () {
//   console.log(x);
// };

// x = 2;

// logToConsole();

// x = 3;

























// 6 CONDITION

// let z = { d: 10 };
// let b = z;
// b.d = 11;

// if (b.d == z.d) console.log("Bad...");

// let a = 1;
// a.toString();
// if (typeof a == "number") console.log("Why ?");

























































// SOLUTION


// 1) objects are stored by reference
// 2) The .toString() method returns a string but does not modify the variable to which it is applied.










































// 7 CONDITION (LET VAR CONST)


// let z = 1;

// if (true) {
//   var f = 10;
//   let a = 10;
//   b = 4;
//   let z = 5;
// }

// const d = {};
// d["a"] = 10;
// d = { ...d };

// console.log(a);
// console.log(b);
// console.log(z);
// console.log(d);
// console.log(f);










































// SOLUTION


// console.log(a); // a is not defined, because block scope
// console.log(b); // 4, because default (without var / let const) will equall global scope
// console.log(z); // 1, because 5 - only in block scope
// console.log(d); // error, because d = const and we can't rewrite d = { ...d };
// console.log(f); // 10, hoisting and var