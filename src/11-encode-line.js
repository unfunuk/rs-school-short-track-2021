/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let str1 = '';
  let k = 1;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        k++;
        i++;
      } else {
        break;
      }
    }
    if (k !== 1) {
      str1 += k;
    }
    str1 += str[i];
    k = 1;
  }
  return str1;
}

module.exports = encodeLine;
