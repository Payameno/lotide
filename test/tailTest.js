const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail: Should return array items minus head (first item)', () => {

  it('Should return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('Should return 8 for [2, 3, 8]', () => {
    assert.deepEqual(tail([2, 3, 8]), [3, 8]);
  });

});