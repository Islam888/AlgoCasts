const findMissingInts = (arr = []) => {
  let subtractResult;
  let missingInts = [];
  arr.sort((a, b) => a - b);
  for (let x = 0; x < arr.length; x++) {
    subtractResult = arr[x + 1] - arr[x];
    if (subtractResult > 1) {
      for (let y = 1; y < subtractResult; y++) {
        missingInts.push(arr[x] + y);
      }
    }
  }
  return missingInts;
};
