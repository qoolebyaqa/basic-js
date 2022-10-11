const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(array) { 
  if (Array.isArray(array)) {
    const arrIndexes = [];
    const arrNoMinusOne = [];
    for (let i = 0; i< array.length; i++){
      if (array[i] !== -1) {
        arrNoMinusOne.push(array[i])
      }
      else {
        arrIndexes.push(i);
      }
    }
    arrNoMinusOne.sort((a, b) => a - b);
    for (let j = 0; j < arrIndexes.length; j++)
    {
      arrNoMinusOne.splice(arrIndexes[j], 0, -1);
    }
    return arrNoMinusOne;
  }
  else return false;
}


module.exports = {
  sortByHeight
};
