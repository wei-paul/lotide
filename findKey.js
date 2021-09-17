const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 😀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 😈  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};
//every iteration of key --- blue hill, akaleri,etc.
//you need a key to find the value, therefore object[key] = { stars: 1 }, etc.
//the callback function x => x.stars === 2 
//this function only has one value (we named x)
//you want to access the { stars: 1 }. so we use .stars.
//the callback will take [key] and put it in [key].stars to check if it's = 2.
//if it is, then stop when it sees one, 
//return that key cuz we found it!.
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

