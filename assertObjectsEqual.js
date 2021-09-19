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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(` 😀  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(` 😈  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  assertObjectsEqual(ab, ba); // --> true

  const abc = { a: "1", b: "2", c: "3" };
  assertObjectsEqual(ab, abc); // ----> false

