const assertEqual = require("chai").assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays: Comapres two arrays to be equal", () => {

  it("Should return false when two arrays are not equal", () => {
    
    assert.equal(eqArrays([1, 2, 3], [1, 2, "3"]), false);
  });

});