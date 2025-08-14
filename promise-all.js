// CONDITION 1
// Write function 'sleep' that return promise and as result you can call this expression
// Promise.all([fetch1(), fetch2()]).then(console.log);
// fetch1 / fetch2 will return sleep with ms










































// SOLUTION 1

// const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

// function fetch1() {
//   return sleep(500).then(() => 22);
// }

// function fetch2() {
//   return sleep(200).then(() => 10);
// }

// Promise.all([fetch1(), fetch2()]).then(console.log); // instead Promise.all use PromiseAll





























// CONDITION 2
// Write your PromiseAll

































//SOLUTION 2

// function myPromiseAll(promises) {
//   const res = [];
//   const promisesLength = promises.length;

//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < promisesLength; i++) {
//       promises[i]
//         .then((response) => {
//           res.push(response);

//           if (promisesLength === res.length) {
//             resolve(res);
//           }
//         })
//         .catch((err) => reject(err));
//     }
//   });
// }






















// CONDITION 3
// Rewrite your PromiseAll with saving index of each promise



























// SOLUTION 

// function myPromiseAll(promises) {
//     const res = [];
//     let completed = 0;
//     const promisesLength = promises.length;

//     return new Promise((resolve, reject) => {
//         if (promisesLength === 0) {
//             resolve([]);
//         }

//         for (let i = 0; i < promisesLength; i++) {
//             promises[i]
//                 .then((value) => {
//                     res[i] = value; // сохранить результат по индексу
//                     completed++;

//                     if (completed === promisesLength) {
//                         resolve(res);
//                     }
//                 })
//                 .catch((err) => reject(err));
//         }
//     });
// }
