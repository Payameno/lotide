const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// const eqObjects = function (object1, object2) {
//   const objct1Items = Object.keys(object1);
//   const objct2Items = Object.keys(object2);
//   let result;
//   if (objct1Items.length !== objct2Items.length) {
//     return false;
//   }
//     for (let item of objct1Items) { //what if object1Item has only 1 item?
//       if (objct2Items.includes(item)) {
//         if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
//           result = eqarrays(object1[item], object2[item]);
//           } else {
//             if (object1[item] === object2[item]) {
//             result = true;
//             } else {
//               result = false;
//             }
//       }
//     }
//   }
//   return result;
// };

const eqObjects = function (object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (key of obj1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

module.exports = eqObjects;