var threeSum = function(nums) {
  nums.sort((a, b) => a - b); // O(n log n)
  let result = [];

  let n = nums.length;
  
  for (let i = 0; i < n - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      
      let target = -nums[i];
      let left = i + 1;
      let right = n - 1;

      while (left < right) {
          let current_sum = nums[left] + nums[right];

          if (current_sum === target) {
              result.push([nums[i], nums[left], nums[right]]);

              while (left < right && nums[left] === nums[left + 1]) left++;
              while (left < right && nums[right] === nums[right - 1]) right--;
              
              left++;
              right--;
          } else if (current_sum > target) {
              right--;
          } else {
              left++;
          }
      }
  }
  return result;
};
