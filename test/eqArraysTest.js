const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [2, 3, 4]), false);