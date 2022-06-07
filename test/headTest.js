const assert = require('chai').assert;
const head = require('../head');

describe('#head: Should return first item in an array', () => {

  it('Should return 5 for [5,6,7]', () => {
    assert.equal(head([5,6,7]), 5);
  });

  it('Should return "Hello" for ["Hello", "Lighthouse", "Labs"]' , () => {
    assert.equal(head(["Hello", "Lighthouse", "Labs"]), "Hello")
  });
});