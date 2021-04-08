/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  const mas = [];
  let str1 = '';
  const str = domains.join();
  let k = 1;
  const mas2 = [];
  for (let j = str.length - 1; j > -1; j--) {
    if (str[j] === ',') {
      mas.push('.');
      str1 += mas.reverse().join('');
      mas2.push(str1);
      str1 = '';
      mas.splice(0, mas.length);
    } else if (str[j] !== '.' && j !== 0) {
      mas.push(str[j]);
    } else {
      mas.push(str[j]);
      if (j === 0) {
        mas.push('.');
      }
      str1 += mas.reverse().join('');
      mas2.push(str1);
      mas.splice(0, mas.length);
    }
  }
  for (let i = 0; i < mas2.length; i++) {
    for (let j = i + 1; j < mas2.length; j++) {
      if (mas2[i] === mas2[j]) {
        k++;
        mas2.splice(j, 1);
        j--;
      }
    }
    obj[mas2[i]] = k;
    k = 1;
  }
  return obj;
}

module.exports = getDNSStats;
