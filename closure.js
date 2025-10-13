// 1 CONDITION
// What will be in console?

// function makeCounter(count) {
//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter(0);
// let counter2 = makeCounter(0);

// console.log(counter());
// console.log(counter());

// console.log(counter2());
// console.log(counter2());










































// 2 CONDITION
// What will be in console?

// function createIncrement() {
//   let count = 0;
//   function increment() {
//     count++;
//   }

//   let message = `Count is ${count}`;
//   function log() {
//     console.log(message);
//   }

//   return [increment, log];
// }

// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log();























































// SOLUTION Count is 0 Why? How to fix it?

//   function log() {
//     let message = `Count is ${count}`;
//     console.log(message);
//   }

// 3 CONDITION

// Write function sum that will summary args

// console.log(sum()); // 0
// console.log(sum(1)(2)()); // 3
// console.log(sum(1)(2)(3)()); // 6


























































// SOLUTION

// function sum(num) {
//   let result = 0;

//   const calculate = (num) => {
//     if (num === undefined) {
//       return result;
//     }

//     result += num;
//     return calculate;
//   };

//   return calculate(num);
// }

// console.log(sum());
// console.log(sum(1)(2)());
// console.log(sum(1)(2)(3)());
