function openOrSenior(data) {
  const resutl = [];
  for (const [age, handicap] of data) {
    if (age >= 55 && handicap > 7) {
      resutl.push("Senior");
    } else {
      resutl.push("Open");
    }
  }
  return resutl;
}
