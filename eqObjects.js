const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 😀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 😈  Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let property1 of keys1) {

    if (Array.isArray(object1[property1])){
      if (!(eqArrays(object1[property1], object2[property1]))) {
        return false;
      } else {
        if (object1(property1) !== object2(property1)) {
          return false;
        }
      }
    }
  }
  return true;
}
  
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab, ba), true);








