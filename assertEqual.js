const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(" 😀 " + "Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(" 😈 " + "Assertion Failed: " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse", "Lighthouse");
assertEqual("dessert", "fruits");
assertEqual(12, 12);
assertEqual(53, 3);