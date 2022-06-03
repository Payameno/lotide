function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function assertArraysEqual(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    return console.log("🚫Arrays are not equal🚫");
  } else {
    return console.log("🟢Arrays are equal🟢");
  }
};
assertArraysEqual([1, 4, 3], ["1", 4, 3]);