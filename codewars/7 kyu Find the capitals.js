var capitals = function (word) {
  const res = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90) {
      res.push(i);
    }
  }

  return res;
};
