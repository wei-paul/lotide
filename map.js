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

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback){
  const results = [];
  for (let item of array){
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const ab = ["g", "c", "t", "m", "t"]
const bc = ["r", "o", "o", "a", "o"]


assertArraysEqual(map(words, word => word[0]), ab)
assertArraysEqual(map(words, word => word[1]), bc)
