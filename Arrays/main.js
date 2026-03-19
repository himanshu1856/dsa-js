const reverseArray = (arr) => {
    // [2, 7, 5, 9] => [9, 5, 7, 2]
    if (arr.length === 0) return [0];
    let pt1 = 0;
    let pt2 = arr.length - 1;
    while (pt1 < pt2) {
        [arr[pt1], arr[pt2]] = [arr[pt2], arr[pt1]];
        pt1++;
        pt2--;
    }
};

const swapAlternate = (arr) => {
    // [1, 2, 3, 4, 5, 6] => [2, 1, 4, 3, 6, 5]
    let pt1 = 0;
    while (pt1 < arr.length - 1) {
        [arr[pt1], arr[pt1 + 1]] = [arr[pt1 + 1], arr[pt1]];
        pt1 += 2;
    }
};

const findUniqueElement = (arr) => {};

const arr = [2, 7, 5, 9, 3];
// reverseArray(arr);
swapAlternate(arr)
console.log(arr);
