const { NotImplementedError } = require('../extensions/index.js');

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
  let reverses = [];
  domains.forEach((domain) => {
    let revers = domain.split('.').reverse();
    reverses.push(revers);
  });

  let obj = {};

  reverses.forEach((revers) => {
    let prop = '';
    for (let i = 0; i < revers.length; i += 1) {
      prop = `${prop}.${revers[i]}`;
      if (!obj.hasOwnProperty(prop)) {
        obj[prop] = 1;
      } else {
        obj[prop] += 1;
      }
    }
  })
  return obj;
}

module.exports = {
  getDNSStats
};
