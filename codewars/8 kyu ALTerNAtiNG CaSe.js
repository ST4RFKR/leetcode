String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  return this.split("")
    .map((ch) =>
      ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLocaleLowerCase(),
    )
    .join("");
};
