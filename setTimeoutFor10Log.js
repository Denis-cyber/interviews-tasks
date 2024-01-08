// CONDITION

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 500)
// }

// MAKE OUTPUT 0, 1, 2, 3 ... 9

// SOLUTION

// 1) var -> let

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 500);
// }

// 2) Third param to setTimeout

// for (var i = 0; i < 10; i++) {
//   setTimeout(
//     (n) => {
//       console.log(n);
//     },
//     500,
//     i
//   );
// }

// 3) Make closure with immediately invoked function expression

// for (var i = 0; i < 10; i++) {
//   (function (n) {
//     setTimeout(() => {
//       console.log(n);
//     }, 500);
//   })(i);
// }
