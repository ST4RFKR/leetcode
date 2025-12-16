function findOutlier(integers) {
  let odd = [];
  let even = [];

  for (const num of integers) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }

  return even.length === 1 ? even[0] : odd[0];
}
