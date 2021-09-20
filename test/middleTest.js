const assert = require('chai').assert;
const middle = require('../middle')

describe("#middle", () => {
  it("returns [4] for [2,3,4,5,6]", () => {
    assert.deepEqual(middle([2,3,4,5,6]), [4]);
  
  });
  
  it("returns [4,5] for [2,3,4,5,6,7]", () => {
    assert.deepEqual(middle([2,3,4,5,6,7]), [4,5]);
  
  });

});

