const { NotImplementedError } = require('../extensions/index.js');

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
  let arrNums = n.toString().split('').map(Number);
  let result = 0;
  for (let i = 0; i < arrNums.length; i += 1) {
    let maxNum = (arrNums.slice(0, i).concat(arrNums.slice(i + 1))).join('');
    if (maxNum > result) {
      result = maxNum;
    }
  } return Number(result);
}

module.exports = {
  deleteDigit
};
