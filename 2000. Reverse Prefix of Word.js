/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  const arrWord = word.split("");
  const chIdx = arrWord.indexOf(ch);

  if (chIdx === -1) return word;

  let left = 0;
  let right = chIdx;

  while (left < right) {
    [arrWord[left], arrWord[right]] = [arrWord[right], arrWord[left]];
    left++;
    right--;
  }
  return arrWord.join("");
};
