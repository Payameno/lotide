const map = function (array, callBack) {
  let results = [];
  for (item of array) {
    results.push(callBack(item));

  }
  return results;
};

module.exports = map;