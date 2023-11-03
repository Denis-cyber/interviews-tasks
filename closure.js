// CONDITION

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
