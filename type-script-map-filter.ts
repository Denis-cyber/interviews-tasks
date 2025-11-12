// CONDITION
// 1) write map function (for example myMap) through the method reduce with types

// function myMap(arr, callback) {
//   return arr.reduce();
// }

// console.log(myMap([1, 2, 3, 4, 5], (el) => el * 2));




















































// SOLUTION

// function myMap<T,U>(
//     arr: T[], 
//     callback: (item: T, index: number, arr: T[]) => U
// ): U[] {
//   return arr.reduce((acc: U[], value: T, index: number, arr: T[]) => {
//     acc.push(callback(value, index, arr));
//     return acc;
//   }, []);
// }

// console.log(myMap([1, 2, 3, 4, 5], (el) => el * 2));





// CONDITION
// 2) write filter function (for example myFilter) through the method reduce with types

// function myFilter(arr, callback) {
//   return arr.reduce();
// }

// console.log(myFilter([1, 2, 3, 4, 5], (el) => el > 2));


























// SOLUTION

// function myFilter<T>(
//     arr: T[],
//     callback: (item: T, index: number, arr: T[]) => boolean,
// ): T[] {
//   return arr.reduce((acc: T[], value: T, index: number, arr: T[]) => {
//     if (callback(value, index, arr)) {
//         acc.push(value)
//     }

//     return acc;
//   }, []);
// }

// console.log(myFilter([1, 2, 3, 4, 5], (el) => el > 2));
