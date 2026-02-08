function gooseFilter(birds, geese) {
  const res = [];

  for (let i = 0; i < birds.length; i++) {
    if (!geese.includes(birds[i])) {
      res.push(birds[i]);
    }
  }

  return res;
}
