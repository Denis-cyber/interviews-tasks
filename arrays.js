// 1 CONDITION
// Write function that return ['grapefruit', 'banana', 'orange'] because grapefruit was 3 times in array, banana - 2 and orange - 1.

let words = ["orange", "grapefruit", "grapefruit", "grapefruit", "banana", "banana"];





















































// SOLUTION

const sortArr = Object.entries(
  words.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;

    return acc;
  }, {})
)
  .sort((a, b) => b[1] - a[1])
  .map((item) => item[0]);

// console.log(sortArr);






// SOLUTION by MAP

const sortArrByMap = (arr) => {
    const count = new Map;

    for (const item of arr) {
        count.set(item, (count.get(item) || 0) + 1);
    }

    return Array.from(count.entries()).sort(([, numA], [, numB]) => numB - numA).map(item => item[0]);
}

// console.log(sortArrByMap(words));











// 2 CONDITION
// Write func that returns only array from nums that were repeat in inittial array
// [1,2,3,4,2,3,2] => [2,3]















// SOLUTION

let nums = [1, 2, 3, 4, 2, 3, 2];

const checkRepeatNums = (arr) =>
  Object.entries(
    arr.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;

      return acc;
    }, {})
  )
    .filter((item) => item[1] > 1)
    .map((item) => +item[0]);

// console.log(checkRepeatNums(nums));




// SOLUTION  by Map

const taskTwoUseMap = (arrNums) => {
    const counts = new Map();
    
    for (const num of arrNums) {
        counts.set(num, (counts.get(num) || 0) + 1)
    }
    
    const repeatedNums = [];
    
    for (const [num, amount] of counts) {
        if (amount > 1) repeatedNums.push(num);
    }
    
    return repeatedNums;
}

// console.log(taskTwoUseMap(nums));



































// 3 CONDITION

const arrayExample = [1230, 199, 2301, 123, 110001, 3021, 101010, 991, 9];
// [[199, 991], [110001, 101010], [1230, 2301, 1230, 3021], [9]]; <=== should be at the end;


































// solution with Map 

// function digitPermutationUseMap(arr) {
//     const map = new Map();

//     for (const item of arr) {
//         const sortedItem = String(item).split('').sort().join('');

//         if (!map.has(sortedItem)) {
//             map.set(sortedItem, []);
//         }

//         map.get(sortedItem).push(Number(item));
//     }

//     return Array.from(map.values());
// }

// digitPermutationUseMap(arrayExample);



// solution with {}

// function digitPermutationUseObject(arr) {
//     const obj = {}

//     for (const item of arr) {
//         const sortedItem = String(item).split('').sort().join('');

//         if(!obj[sortedItem]) {
//             obj[sortedItem] = [];
//         }

//         obj[sortedItem].push(Number(item));
//     }

//     return Object.values(obj);
// }


// digitPermutationUseObject(arrayExample);
