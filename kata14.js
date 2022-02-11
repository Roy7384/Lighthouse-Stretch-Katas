const calculateChange = function(total, cash) {
  let change = cash - total;
  const validDen = [
    [2000, "twentyDollars"],
    [1000, "tenDollars"],
    [500, "fiveDollars"],
    [200, "twoDollars"],
    [100, "oneDollars"],
    [25, "quarter"],
    [10, "dime"],
    [5, "Nickel"],
    [1, "Penny"]
  ];

  const result = {};
  for (const [key, value] of validDen) {
    if (change % key >= 0 && change % key !== change) {
      result[value] = Math.floor(change / key);
      change = change % key;
    }
  }
  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));