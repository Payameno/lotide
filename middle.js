const middle = function(baseArr) {
  let middleNum = [];
  if (baseArr.length === 1 || baseArr.length === 2) {
    return [];
  } else if (baseArr.length % 2 !== 0) {
    middleNum = [((baseArr.length + 1) / 2)];
    } else if (baseArr.length % 2 === 0){
      middleNum = [(baseArr.length / 2), ((baseArr.length + 2) / 2)];
    }
    return middleNum;
};

module.exports = middle;