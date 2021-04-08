/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const mas = n.toString().split('');
  let count = true;
  for (let i = 0; i < mas.length; i += 3) {
    if (i !== mas.length - 2) {
      if (!(/^[A-F0-9]$/.test(mas[i])) || !(/^[A-F0-9]$/.test(mas[i + 1])) || mas[i + 2] !== '-') {
        count = false;
      }
    } else if (!(/^[A-F0-9]$/.test(mas[i])) || !(/^[A-F0-9]$/.test(mas[i + 1]))) {
      count = false;
    }
  }
  return count;
}

module.exports = isMAC48Address;
