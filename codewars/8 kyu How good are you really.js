function betterThanAverage(classPoints, yourPoints) {
  const avarageSum =
    classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
  console.log(avarageSum);
  return avarageSum < yourPoints;
}
