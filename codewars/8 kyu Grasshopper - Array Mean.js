function findAverage(nums) {
  return nums.reduce((sum, num) => (sum += num)) / nums.length;
}
