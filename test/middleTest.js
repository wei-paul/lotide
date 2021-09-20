const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')

assertArraysEqual(middle([2,3,4,5,6]), [4]);
assertArraysEqual(middle([2,3,4,5,6,7]), [4,5]);
