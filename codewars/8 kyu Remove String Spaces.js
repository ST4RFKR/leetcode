function noSpace(x) {
  let res = [];

  for (const ch of x) {
    if (ch !== " ") {
      res.push(ch);
    }
    continue;
  }

  return res.join("");
}
