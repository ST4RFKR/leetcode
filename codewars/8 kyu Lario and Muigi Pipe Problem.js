function pipeFix(numbers) {
  const min_num = numbers[0];
  const max_num = numbers[numbers.length - 1];
  const result = [];

  for (let i = min_num; i <= max_num; i++) {
    result.push(i);
  }
  return result;
}
