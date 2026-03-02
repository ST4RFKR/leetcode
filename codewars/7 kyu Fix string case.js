function solve(s) {
  let lower = 0;
  let upper = 0;
  for (let ch of s) {
    if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
      upper++;
    } else {
      lower++;
    }
  }
  return lower >= upper ? s.toLowerCase() : s.toUpperCase();
}
