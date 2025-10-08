// TASK 1
// CONDITION
// What will be in the console?

let z = 1;

if (true) {
  var f = 10;
  let a = 10;
  b = 4;
  let z = 5;
}

const d = {};
d["a"] = 10;
d = { ...d };

console.log(a);
console.log(b);
console.log(z);
console.log(d);
console.log(f);










































// SOLUTION


console.log(a); // a is not defined, because block scope
console.log(b); // 4, because default (without var / let const) will equall global scope
console.log(z); // 1, because 5 - only in block scope
console.log(d); // error, because d = const and we can't rewrite d = { ...d };
console.log(f); // 10, hoisting and var