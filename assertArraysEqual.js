const eqArrays = require('./eqArrays');

function assertArraysEqual(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    return console.log("🚫Arrays are not equal🚫");
  } else {
    return console.log("🟢Arrays are equal🟢");
  }
};

module.exports = assertArraysEqual;