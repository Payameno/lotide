const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let tailarr = [];
  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      tailarr.push(arr[i]);
    }
  }
  return tailarr;
};

module.exports = tail;