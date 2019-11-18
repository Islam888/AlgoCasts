function missingInts(arr = []) {
  let result = null;
  let newArr = [];
  for (let x = 0; x < arr.length; x++) {
    result = arr[x + 1] - arr[x];
    if (result > 1) {
      for (let y = 1; y < result; y++) {
        newArr.push(arr[x] + y);
      }
    }
  }
  return newArr;
}

