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

const map = function (array, callBack) {
  let results = [];
  for (item of array) {
    results.push(callBack(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map (words, (word) => word[0]);
assertArraysEqual(words, results1);