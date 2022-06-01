const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sntc) {
  sntc = sntc.replace(/\s/g,"");
  console.log(sntc);
  const result = {};
  for (item of sntc) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
  }
  return result;
}

console.log(countLetters("lighthouse in the house"));