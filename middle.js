const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
    }
    return true;
}

const assertArraysEqual = function(arr1, arr2) {
  if (!eqarrays(arr1, arr2)) {
    console.log("🚫Arrays are not equal🚫");
  } else {
    console.log("🟢Arrays are equal🟢");
  }
};

const middle = function(baseArr) {
  let middleNum = [];
  if (baseArr.length === 1 || baseArr.length === 2) {
    return [];
  } else if (baseArr.length % 2 !== 0) {
    middleNum = ((baseArr.length + 1) / 2);
    } else if (baseArr.length % 2 === 0){
      middleNum = [(baseArr.length / 2), ((baseArr.length + 2) / 2)];
    }
    return middleNum;
};