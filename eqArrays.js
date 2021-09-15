const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 😀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 😈  Assertion Failed: ${actual} !== ${expected}`);
  }
};


function eqArrays(arrA, arrB){
  let conditions = true;
  if (arrA.length !== arrB.length){
    return false;
  }
  for (let i = 0; i < arrA.length; i++){
    if (arrA[i] !== arrB[i]){
      conditions = false;
      break;
    }
  } 
  return conditions;
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);



