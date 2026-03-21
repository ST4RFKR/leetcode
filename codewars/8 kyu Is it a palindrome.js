function isPalindrome(x) {
  const normalizeStr = x.toLowerCase();
  let left = 0;
  let rigth = x.length - 1;

  while (left < rigth) {
    if (normalizeStr[left] !== normalizeStr[rigth]) {
      return false;
    }
    left++;
    rigth--;
  }
  return true;
}
