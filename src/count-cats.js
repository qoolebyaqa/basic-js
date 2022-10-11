const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(arr) {
  let arrTotal = [];
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++) {
      arrTotal.push(arr[i][j]);
    }
  }
  const arrFiltred = arrTotal.filter((value) => 
    value === '^^')
  return arrFiltred.length;
}


module.exports = {
  countCats
};
