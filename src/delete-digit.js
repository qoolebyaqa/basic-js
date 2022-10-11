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
 function deleteDigit(number) {
  const arrStr = number.toString().split('');
  for (let i = 0; i < arrStr.length; i++){
    if(arrStr[i] < arrStr[i+1]) {
      arrStr.splice(i, 1);
      break;
    }
  }
  if(arrStr.length === number.toString().length){
    arrStr.splice(arrStr.length-1, 1)
  }
  return Number(arrStr.join(''));
}


module.exports = {
  deleteDigit
};
