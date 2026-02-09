function enough(cap, on, wait) {
  const totalPassanger = on + wait;
  // your code here

  if (totalPassanger > cap) {
    return totalPassanger - cap;
  }
  return 0;
}
