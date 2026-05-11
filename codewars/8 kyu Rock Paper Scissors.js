const rps = (p1, p2) => {
  if (p1 === p2) return true;

  if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  }
};
