const tail = function(words) {
  let tailArray = [];
  for (let i = 1; i < words.length; i++) {
    tailArray.push(words[i]);
  }
  return tailArray;
};

module.exports = tail;