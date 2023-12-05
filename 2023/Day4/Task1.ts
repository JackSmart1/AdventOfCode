const day4Task1 = (input) => {
  let total = 0;
  let cardArray = input.split("\n");
  cardArray = cardArray.map((c) => {
    let numbers = c.slice(c.indexOf(":") + 1).trim();

    return {
      yourNumbers: numbers.slice(0, numbers.indexOf("|")).trim(),

      winningNumbers: numbers.slice(numbers.indexOf("|") + 1).trim(),
    };
  })

  cardArray.forEach((g) => {
    let points = 0;
    let yourNumbers = g.yourNumbers.split(" ");
    let winningNumbers = g.winningNumbers.split(" ");
    yourNumbers.forEach((n) => {
      if (winningNumbers.includes(n)) {
        if (n) {
          points === 0 ? points++ : (points *= 2);
        }
      }
    });
    points;
    total += points;
  });

  return total;
};


