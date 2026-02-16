const printElements = function (arr, idx) {
  if (arr.length === idx) {
    return;
  }
  console.log(arr[idx]);
  printElements(arr, idx + 1);
};

const printReverse = function (arr, idx) {
  if (arr.length === idx) {
    return;
  }
  printReverse(arr, idx + 1);
  console.log(arr[idx]);
};

const maxInArray = function (arr, idx) {
  if (idx === arr.length) {
    return 0;
  }
  let max = maxInArray(arr, idx + 1);
  if (max > arr[idx]) {
    return max;
  } else {
    return arr[idx];
  }
};

const firstOccIdx = function (arr, idx, k) {
  if (idx === arr.length) return -1;
  if (arr[idx] === k) return idx;
  return firstOccIdx(arr, idx + 1, k);
};

const lastOccIdx = function (arr, idx, k) {
  if (idx === arr.length) return -1;
  let ans = lastOccIdx(arr, idx + 1, k);
  if (ans !== -1) {
    return ans;
  }
  if (arr[idx] === k) return idx;
  return -1;
};

const allOccIdx = function (arr, idx, k) {
  if(idx === arr.length){
    return [];
  }
  let ans = allOccIdx(arr, idx + 1, 8)
  if(arr[idx] === k){
    ans.push(idx);
  }
  return ans;
}

console.log(allOccIdx([5, 8, 6, 8, 10], 0, 8));
