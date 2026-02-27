function titleCase(title, minorWords) {
  if (!title) return "";

  const words = title.toLowerCase().split(" ");
  const minor = minorWords ? minorWords.toLowerCase().split(" ") : [];

  return words
    .map((word, index) => {
      if (minor.includes(word) && index > 0) {
        return word;
      }
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}
