// You should push all values into result array

// CONDITION

// const tree = {
//   value: 1,
//   chidlren: [
//     {
//       value: 2,
//       chidlren: [{ value: 3 }],
//     },
//     {
//       value: 4,
//       chidlren: [{ value: 5 }, { value: 6 }],
//     },
//   ],
// };

// function getTreeValues(tree) {}

// console.log(getTreeValues(tree)); // => [1,2,3,4,5,6]

// SOLUTION

// function getTreeValues(tree) {
//     const result = [];
//     const stack = [tree];

//     while (stack.length > 0) {
//       const node = stack.pop();

//       if (node?.value !== undefined) {
//         result.push(node.value);
//       }

//       if (node.chidlren?.length) {
//         stack.push(...node.chidlren);
//       }
//     }

//     return result;
//   }
