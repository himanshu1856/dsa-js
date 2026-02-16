const towerOfHanoi = function (n, source, helper, destination) {
  if (n === 0) {
    return;
  }
  towerOfHanoi(n - 1, source, destination, helper);
  console.log(`Move ${n} from ${source} to ${destination}`);
  towerOfHanoi(n - 1, helper, source , destination);
};

towerOfHanoi(3, "A", "B", "C");
