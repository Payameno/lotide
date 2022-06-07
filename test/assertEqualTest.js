const assert = require('chai').assert;
const assertEqual = require('../assertEqual')

describe("#assertEqual: Assertion for equality of basic data types", () => {

  it('Should return false', () => {

    assert.deepEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

  it('Should return true', () => {

    assert.deepEqual(assertEqual(1, 1));
  });

  it('Should return false', () => {

    assert.deepEqual(assertEqual("test", "  Test"));
  });

  it('Should return true', () => {

    assert.deepEqual(assertEqual("Test", "  Test"));
  });

  it('Should return false', () => {

    assert.deepEqual(assertEqual(15, 15.1));
  });

});