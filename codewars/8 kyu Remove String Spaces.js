function noSpace(x) {
  let res = [];

  for (const ch of x) {
    if (ch !== " ") {
      res.push(ch);
    }
  }

  return res.join("");
}
