/**
 * @param {number[]} height
 * @return {number}
 */

function maxArea(height) {
  let begin = 0;
  let end = height.length - 1;
  let result = -Infinity;

  while (begin <= end) {
    if (height[begin] < height[begin + 1]) {
      begin++;
    }
    if (height[end] < height[end - 1]) {
      end--;
    }

    result = Math.min(height[begin], height[end]);
  }

  return result * result;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
