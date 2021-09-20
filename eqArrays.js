const eqArrays = function(arrA, arrB) {
  let conditions = true;
  if (arrA.length !== arrB.length) {
    return false;
  }
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      conditions = false;
      break;
    }
  }
  return conditions;
};

module.exports = eqArrays;


