function disemvowel(str) {
  const x = ["a", "o", "i", "e", "u", "A", "O", "I", "E", "U"];

  return [...str].filter((item) => !x.includes(item)).join("");
}
