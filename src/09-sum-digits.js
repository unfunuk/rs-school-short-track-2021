/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let mas = n.toString().split('');
  let sum = 0;
  while (mas.length > 1) {
    if (sum !== 0) {
      mas = sum.toString().split('');
      sum = 0;
    }
    for (let i = 0; i < mas.length; i++) {
      sum += Number(mas[i]);
    }
  }
  return sum;
}

module.exports = getSumOfDigits;
