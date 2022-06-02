const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (objct, val) {
  for (let item in objct) {
    if(objct[item] === val) {
      return item;
    } 
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));