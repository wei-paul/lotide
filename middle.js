const middle = function(array) {
  let middleNumber = [];
  if (array.length < 3) {
    return [];
  }
  if (array.length % 2 === 0) {
    middleNumber.push(array[Math.floor(array.length / 2) - 1]);
  }
  middleNumber.push(array[Math.floor(array.length / 2)]);
  return middleNumber;
};

module.exports = middle;
