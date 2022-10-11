const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
   
  if (matrix.length === 1){
    return matrix[0].reduce((prev, cur) => prev + cur);
  }
  else {
  let l = matrix[0].length;
  const arrFilled = matrix.flat();

  while (arrFilled.includes(0)) {
    let ind = arrFilled.indexOf(0);
    if (!arrFilled[ind+l] === 0) {
      arrFilled.splice((ind+l), 1, 'k');
      arrFilled.splice(ind, 1, 'k');
    }
    else {
      arrFilled.splice(ind+2*l, 1, 'k');
      arrFilled.splice((ind+l), 1, 'k');
      arrFilled.splice(ind, 1, 'k')
    } 
  }

  while (arrFilled.includes('k')) {
    arrFilled.splice(arrFilled.indexOf('k'), 1);
  }
  return arrFilled.reduce((prev, cur) => prev + cur);
}
}

module.exports = {
  getMatrixElementsSum
};
