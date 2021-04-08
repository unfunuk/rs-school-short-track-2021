/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const mas1 = [];
  let n = 0;
  let m = 0;
  let j = 0;
  let b = 0;
  const mas2 = [];
  const mas3 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      mas1[n] = i;
      n++;
    } else {
      mas2[m] = arr[i];
      m++;
    }
  }
  mas2.sort((a, c) => a - c);
  for (let k = 0; k < arr.length; k++) {
    if (k === mas1[j]) {
      mas3[k] = -1;
      j++;
    } else {
      mas3[k] = mas2[b];
      b++;
    }
  }
  return mas3;
}
module.exports = sortByHeight;
