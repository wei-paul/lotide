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


const middle = function(array) {
  let middleNumber = [];
  if (array.length < 3) {
    return [];
  }
  if (array.length % 2 === 0) {
    middleNumber.push(array[Math.floor(array.length / 2) - 1]);
  }
  middleNumber.push(array[Math.floor(array.length / 2)]);
  return middleNumber;
};

assertArraysEqual(middle([2,3,4,5,6]), [4]);
assertArraysEqual(middle([2,3,4,5,6,7]), [4,5]);


