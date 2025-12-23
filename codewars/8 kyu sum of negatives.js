function countPositivesSumNegatives(input) {
  let sumNegative = 0;
  let countPositive = 0;

  if (input === null || input.length === 0) return [];

  for (const element of input) {
    if (element <= 0) {
      sumNegative += element;
    } else {
      countPositive += 1;
    }
  }
  return [countPositive, sumNegative];
}
