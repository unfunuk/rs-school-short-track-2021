/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let k = 0;
  const mas1 = s1.split('');
  const mas2 = s2.split('');
  for (let i = 0; i < mas1.length; i++) {
    for (let j = 0; j < mas2.length; j++) {
      if (k === 0) {
        if (mas1[i] === mas2[j]) {
          count++; mas2.splice(j, 1); k++;
        }
      }
    }
    k = 0;
  }
  return count;
}
module.exports = getCommonCharacterCount;
