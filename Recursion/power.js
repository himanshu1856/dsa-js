const powerLinear = function (x, n) {
  if (n === 0) return 1;
  return x * powerLinear(x, n - 1);
};

const powerLog = function (x, n) {
  //base case
  if (n === 0) return 1;
  // for even powers
  if (n % 2 === 0) {
    let ans = powerLog(x, n / 2);
    return ans * ans;
  } else { 
    // for odd powers
    let ans = powerLog(x, (n - 1) / 2);
    return ans * ans * x;
  }
};

console.log(powerLog(3, 4));
