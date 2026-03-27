function diamond(n) {
  let arr = [];
  if (n < 0 || n % 2 === 0) {
    return null;
  }
  for (let i = 1; i <= n; i += 2) {
    let spaces = (n - i) / 2;
    arr.push(`${" ".repeat(spaces)}${"*".repeat(i)}\n`);
    spaces += 2;
  }

  return arr.join("") + arr.reverse().splice(1).join("");
}

console.log(diamond(5));
