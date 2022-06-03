const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (object, callback) {
  for (key in object) {
    const objectKeys = object[key];
    const comparingfunc = callback(objectKeys);
    if (comparingfunc) {
      return key;
    }
  }
};

assertEqual(findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2)
  , "noma");


