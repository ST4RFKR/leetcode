function printerError(s) {
  let error = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > 109) {
      error++;
    }
  }

  return `${error}/${s.length}`;
}
