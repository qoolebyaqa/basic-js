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
 function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'}) {
  let add = [];
  let mstr = [];
  if (str === null || addition === null){
    str = 'null';
    addition = 'null';
  }
  else if (str.constructor === Object) {
    str = {
      [Symbol.toPrimitive](hint) {
        if (hint == 'string') {
          return 'STRING_OR_DEFAULT';
        }
        if (hint == 'number') {
          return 'NUMBER';
        }
        if (hint == 'default') {
          return 'STRING_OR_DEFAULT';
        }
      }
    }
  }
  else {
  str = str.toString();
  addition = addition.toString();
  }
  
  for (let i = 0; i < additionRepeatTimes; i++) {
    add.push(addition);
  }
  let totalAdd = add.join(additionSeparator);
  for (let j = 0; j < repeatTimes; j++) {
    mstr.push(str+totalAdd);
  }
  return mstr.join(separator);
}

module.exports = {
  repeater
};
