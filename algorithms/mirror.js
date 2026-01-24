// Condition

// Arrays can be of different lengths.
// Numbers in the arrays can be both positive and negative.
// Write solution with only one iteration

function mirror(arr1, arr2) {
    // code;    
}

console.log(mirror([1, 2, 3, 4], [4, 3, 2, 1]));// true
console.log(mirror([1, 2, 3], [3, 2, 1, 0]));// false 


















































// solution 

// function mirror(arr1, arr2) {

//     if (arr1.length !== arr2.length) return false;

//     const iterationNumber = arr1.length;
//     let counterFromLastIndex = iterationNumber - 1;

//     for (let i = 0; i < iterationNumber; i++) {
//         if (arr1[i] !== arr2[counterFromLastIndex]) {
//             return false
//         }

//         counterFromLastIndex--;

//         if (i === iterationNumber - 1) {
//             return true
//         }
//     }
    
// }