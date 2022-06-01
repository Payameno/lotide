const eqarrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (!eqarrays(arr1, arr2)) {
    console.log("🚫🚫🚫Arrays are not equal!");
  } else {
    console.log("🟢🟢🟢Arrays are equal.");
  }
};

const without = function(words, remove) {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < remove.length; j++) {
      if (words[i] === remove[j]) {
        words.splice([i], 1);
      }
    }
  }
  return words;
};