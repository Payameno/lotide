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
    console.log("🚫Arrays are not equal🚫");
  } else {
    console.log("🟢Arrays are equal🟢");
  }
};

const letterPositions = function (sentence) {
  const result = {};
  counter = 0;
  for (let item of sentence) {
    if (item !== " ") {
      if (result[item]) {
        result[item].push(counter);
      } else {
        result[item] = [counter];
      }
    }
    counter += 1;
    }
    return result;
  }
    
  console.log(assertArraysEqual(letterPositions("Lighthouse in the house").e, [1]));