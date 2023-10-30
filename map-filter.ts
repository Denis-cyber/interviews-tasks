// 1) write map function (for example myMap) through the method reduce with types

// function myMap(arr, callback) {
//   return arr.reduce();
// }

// console.log(myMap([1, 2, 3, 4, 5], (el) => el * 2));

// SOLUTION

// function myMap<T>(arr: T[], callback: (item: T, index: number, arr: T[]) => T) {
//   return arr.reduce((acc: T[], value: T, index: number, arr: T[]) => {
//     acc.push(callback(value, index, arr));
//     return acc;
//   }, []);
// }

// console.log(myMap([1, 2, 3, 4, 5], (el) => el * 2));

// 2) write filter function (for example myFilter) through the method reduce with types

// function myFilter(arr, callback) {
//   return arr.reduce();
// }

// console.log(myFilter([1, 2, 3, 4, 5], (el) => el > 2));

// SOLUTION

// function myFilter<T>(arr: T[], callback: (item: T, index: number, arr: T[]) => boolean) {
//   return arr.reduce((acc: T[], value: T, indexReduce: number, arrReduce: T[]) => {
//     if (callback(value, indexReduce, arrReduce)) {
//       acc.push(value);
//     }
//     return acc;
//   }, []);
// }

// console.log(myFilter([1, 2, 3, 4, 5], (el) => el > 2));
