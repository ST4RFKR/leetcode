function minValue(values) {
  let sortValues = [...values].sort((a, b) => a - b);
  return Number([...new Set(sortValues)].join(""));
}
