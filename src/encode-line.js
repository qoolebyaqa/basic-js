const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  const strArr = str.split('');
  const resultArr = [];
  let counter = 1;
 
  strArr.forEach((value, index, array) => {
   if (array[index] === array[index+1]) {
     counter++;
   }
   else {
     resultArr.push(counter);
     resultArr.push(value);
     counter = 1;
   }
  })
 
  resultArr.forEach((value, index, array) => {
   if (value === 1) {
     array.splice(index, 1);
   }
  })
 
  return resultArr.join(''); 
 }


module.exports = {
  encodeLine
};
