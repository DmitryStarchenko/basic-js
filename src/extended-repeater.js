const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let additStr;

  if (options.addition === undefined) {
    additStr = ''
  } else {
    additStr = String(options.addition);
  }

  let result = '';
  for (let i = 1; i < options.additionRepeatTimes; i += 1) {
    additStr = additStr + (options.additionSeparator || '|') + String(options.addition) || '';
  }

  result = str + additStr;
  for (let i = 1; i < options.repeatTimes; i += 1) {
    result = result + (options.separator || '+') + str + additStr;
  }

 return result;
}

module.exports = {
  repeater
};
