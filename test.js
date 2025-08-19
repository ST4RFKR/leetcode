

function test(nums, k) {
  let sum_state = 0
  let res = -Infinity
  let begin = 0;

  for (let end = 0; end < nums.length; end++) {
    sum_state += nums[end]

    if (end - begin + 1 === k) {
      res = Math.max(sum_state, res)
      sum_state -= nums[begin]
      begin += 1
    }
  }
  return res
}

console.log(test([1, 2, 3, 3, 1, 2, 3], 2));
