/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let left = 0;
  let right = 0;
  let res = [];

  while (left < word1.length || right < word2.length) {
    debugger;
    if (left < word1.length) {
      res.push(word1[left]);
      left++;
    }
    if (right < word2.length) {
      res.push(word2[right]);
      right++;
    }
  }
  return res.join("");
};

console.log(mergeAlternately("abc", "pqr"));
