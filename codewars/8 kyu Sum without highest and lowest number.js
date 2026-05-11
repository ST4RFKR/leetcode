function sumArray(array) {
  if (!array || array.length <= 2) {
    return 0;
  }
  const res = [...array]
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((sum, num) => sum + num, 0);
  return res;
}
