// DESCRIPTION

const arrayExample = [1230, 199, 2301, 123, 110001, 3021, 101010, 991, 9];
// [[199, 991], [110001, 101010], [1230, 2301, 1230, 3021], [9]];


// solution with Map 

function digitPermutation(arr) {
    const map = new Map();

    for (const item of arr) {
        const sortedItem = String(item).split('').sort().join('');

        if (!map.has(sortedItem)) {
            map.set(sortedItem, []);
        }

        map.get(sortedItem).push(Number(item));
    }

    return Array.from(map.values());
}

digitPermutation(arrayExample);


// solution with {}