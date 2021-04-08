/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let str = '';
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@' && /^[a-z]$/.test(email[i + 1])) {
      for (let j = i + 1; j < email.length; j++) {
        str += email[j];
      }
    }
  }
  return str;
}

module.exports = getEmailDomain;
