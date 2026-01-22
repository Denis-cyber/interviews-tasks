// condition

const findMaxString = (s) => {
    // code;
}

console.log(findMaxString('aaa bbbbb cc')); // 5
console.log(findMaxString('a bbb ccc dd')); // 3














































// solution easy (beacause there are 2 arrays iterations)

// const findMaxString = (s) => s
//     .split(' ').reduce((acc, item) => {
//         if (item.length > acc) {
//             acc = item.length
//         }

//         return acc;

//     }, 0)






































// solution hard (with 1 iteration)

// const findMaxString = (s) => {
//     let max = 0;
//     let counter = 0;

//     for (let i = 0; i <= s.length; i++) {
//         if (s[i] === ' ' || s[i] === s[s.length - 1]) {
//             if (counter > max) {
//                 max = counter;
//                 counter = 0;
//             } else {
//                 counter = 0;
//             }

//         } else {
//             counter++;
//         }
//     }

//     return max;
// }