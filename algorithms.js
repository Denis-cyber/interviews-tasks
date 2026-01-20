// TASK N 1

// condition 
// write code, that would be reverse array

function reverse (arr) {
    // code;
}

console.log(reverse(['h', 'e', 'l', 'l', 'o'])); // ['o', 'l', 'l', 'e', 'h']
console.log(reverse(['t', 'o', 'p', 's', 'k','y'])); // ['y', 'k', 's', 'p', 'o','t']




























// solution 1 (simply)

// function reverse (arr) {
//     return arr.reverse()
// }









































// solution 2 (more difficult - without array.prototype.reverse)

// function reverse (arr) {
//     const result = [];
//     const lastIndex = arr.length - 1;

//     let i = 0; i > 0; i++

//     for (let i = lastIndex; i >= 0; i-- ) {
//         result.push(arr[i]);
//     }

//     return result;
// }