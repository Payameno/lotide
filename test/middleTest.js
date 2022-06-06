const assert = require("chai").assert;
const middle = require("../middle");

describe("#Middle: Finds the middle number in an array", () => {
  it("Should return an empty array given an array with one item", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("Should return an empty array given an array with two items", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("Should return [2] given [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("Should return [3] given [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("Should return [2, 3] given [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("Should return [3, 4] given [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
