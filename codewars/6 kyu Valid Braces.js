function validBraces(braces) {
  const stack = [];
  const matrix = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (const brace of braces) {
    if (matrix[brace]) {
      stack.push(brace);
    } else {
      const lastBrace = stack.pop(brace);

      if (matrix[lastBrace] !== brace) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
