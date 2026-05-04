function hello(name) {
  if (name && name.length > 0) {
    const firstLetter = name[0].toUpperCase();
    const other = name.slice(1).toLowerCase();

    return `Hello, ${firstLetter}${other}!`;
  }

  return "Hello, World!";
}
