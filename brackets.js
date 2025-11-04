// CONDITION

// console.log((checkBrackets('[[]]'))); // true;
// console.log(checkBrackets('[)')) // false;
// console.log(checkBrackets('))[[(<>)()]]')) // false;






































// SOLUTION


// const brackets = {
//     '[': ']',
//     '(': ')',
//     '<': '>'
// };

// const checkBrackets = str => {
//     const stack = [];

//     const symbols = Array.from(str);

//     const openingBrackets = Object.keys(brackets);
//     const closingBrackets = Object.values(brackets);

//     for (let bracket of symbols) {
//         if (openingBrackets.includes(bracket)) {
//             stack.push(bracket);
//         } else if (closingBrackets.includes(bracket) && brackets[stack[stack.length - 1]] === bracket) {
//             stack.pop();
//         } else {
//             return false;
//         }
//     }

//     return stack.length === 0;
// }

// console.log((checkBrackets('[[]]'))); // true;
// console.log(checkBrackets('[)')) // false;
// console.log(checkBrackets('))[[(<>)()]]')) // false;