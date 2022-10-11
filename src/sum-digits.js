const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  let arr1 = (n+'').split('');
  let sum;
  if (arr1.length > 1){
  while (arr1.length > 1){
    sum = arr1.reduce((a, b) => a*1 + b*1);
    arr1 = (sum+'').split('');
  }
  return Number(arr1.join(''));
  }
  else {
    return n;
  }
}


module.exports = {
  getSumOfDigits
};
