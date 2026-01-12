function divisors(integer) {
  const arr = [];
  for (let i = 0; i < integer; i++) {
    if (integer % i === 0) {
      if (i === 1) continue;
      arr.push(i);
    }
  }
  return arr.length === 0 ? `${integer} is prime` : arr;
}
