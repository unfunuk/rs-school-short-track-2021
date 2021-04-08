/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const mas = n.toString().split('');
  let str = '';
  let max = mas[0];
  let pos = 0;
  for (let i = 0; i < mas.length; i++) {
    if (mas[i] < max) {
      max = mas[i];
      pos = i;
    }
  }
  mas.splice(pos, 1);
  str = mas.join('');
  return Number(str);
}

module.exports = deleteDigit;
