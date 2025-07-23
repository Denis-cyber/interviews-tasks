// TASK 1
// CONDITION
// Write function that return ['banana', 'grapefruit', 'orange'] because banana was 3 times in array, grapefruit - 2 and ...

// let words = ["banana", "grapefruit", "banana", "grapefruit", "banana", "orange", "banana"];

// SOLUTION

// const sortArr = Object.entries(
//   words.reduce((acc, item) => {
//     acc[item] = (acc[item] || 0) + 1;

//     return acc;
//   }, {})
// )
//   .sort((a, b) => b[1] - a[1])
//   .map((item) => item[0]);

// console.log(sortArr);

// TASK 2
// CONDITION
// Write func that returns only array from nums that were repeat in inittial array
// [1,2,3,4,2,3,2] => [2,3]

// SOLUTION
// let nums = [1, 2, 3, 4, 2, 3, 2];

// const checkRepeatNums = (arr) =>
//   Object.entries(
//     arr.reduce((acc, item) => {
//       acc[item] = (acc[item] || 0) + 1;

//       return acc;
//     }, {})
//   )
//     .filter((item) => item[1] > 1)
//     .map((item) => +item[0]);

// console.log(checkRepeatNums(nums));
