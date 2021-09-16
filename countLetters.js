const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 😀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 😈  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let letterCount = {};
  for (const letter of string) {
    if (letter !== " ") {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
};

assertEqual(countLetters("hello").e, 1);