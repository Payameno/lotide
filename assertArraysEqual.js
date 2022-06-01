function eqarrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
    }
    return true;
}

function assertArraysEqual(arr1, arr2) {
  if (!eqarrays(arr1, arr2)) {
    console.log("🚫🚫🚫Arrays are not equal!");
  } else {
    console.log("🟢🟢🟢Arrays are equal.");
  }
};
assertArraysEqual([1, 4, 3], ["1", 4, 3]);