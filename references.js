// TASK 1
// CONDITION
// What will be in the console?

let z = { d: 10 };
let b = z;
b.d = 11;

if (b.d == z.d) console.log("Bad...");

let a = 1;
a.toString();
if (typeof a == "number") console.log("Why ?");

























































// SOLUTION


// 1) objects are stored by reference
// 2) The .toString() method returns a string but does not modify the variable to which it is applied.