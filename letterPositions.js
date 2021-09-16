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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];
    if (character !== " ") {
      if (results[character]) {
        results[character].push(i);
      } else {
        results[character] = [i];
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("lighthouse").h, [3, 5]);