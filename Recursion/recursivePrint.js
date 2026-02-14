function printDecreasing(n) {
  if (n === 0) return;
  console.log(n);
  printDecreasing(n - 1);
}

function printIncreasing(n) {
  if (n === 0) return;
  printIncreasing(n - 1);
  console.log(n);
}

function printDecreasingIncreasing(n) {
  if (n === 0) return;
  console.log(n);
  printDecreasingIncreasing(n - 1);
  console.log(n);
}

printDecreasingIncreasing(5);
