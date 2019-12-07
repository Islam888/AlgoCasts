function removeDuplicate(arr) {
  let newArr = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
