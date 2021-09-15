function eqArrays(arrA, arrB){
  if (arrA.length !== arrB.length){
    return false;
  }
  for (let i = 0; i < arrA.length; i++){
    if (arrA[i] !== arrB[i]){
      return false;
    }
  } 
  return true;
}

const assertArraysEqual = function(arrA, arrB){
  if (eqArrays(arrA, arrB)){
    console.log(` 😀  Assertion Passed: ${arrA} === ${arrB}`);
  } else {
    console.log(` 😈  Assertion Failed: ${arrA} !== ${arrB}`);
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);