function reverseLetter(str) {
  let res = [];

  for (let ch of str) {
    if (ch.charCodeAt() < 97 || ch.charCodeAt() > 122) {
      continue;
    }
    res.unshift(ch);
  }

  return res.join("");
}

console.log(reverseLetter("ultr53o?n"));
