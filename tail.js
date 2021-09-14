const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 😀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 😈  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(words) {
  let tailArray = [];
  for (let i = 1; i < words.length; i++) {
    tailArray.push(words[i]);
  }
  return tailArray;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!