const eqArrays = function(arrA, arrB) {
  if (arrA.length !== arrB.length) {
    return false;
  }
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrA, arrB) {
  if (eqArrays(arrA, arrB)) {
    console.log(` 😀  Assertion Passed: ${arrA} === ${arrB}`);
  } else {
    console.log(` 😈  Assertion Failed: ${arrA} !== ${arrB}`);
  }
};

const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const expected1 = [ 1, 2, 5, 7, 2 ];
const expected2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];

assertArraysEqual(results1, expected1);
assertArraysEqual(results2, expected2);