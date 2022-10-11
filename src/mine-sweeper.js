const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  const fArr = matrix.flat();
  const difArr = [[1, 3, 4], [-1, 1, 2, 3, 4], [-1, 2, 3], [-3, -2, 1, 3, 4], [-4, -3, -2, -1, 1, 2, 3, 4], [3, 2, -1, -3, -4], [1, -2, -3], [1, -1, -2, -3, -4], [-1, -3, -4]];
  let arr1 = [];
  let arr2 = [];
  let counter = 0;

  for (let i = 0; i < fArr.length; i++) {
    for (let j = 0; j < difArr[i].length; j++) {
      if (true === fArr[i + difArr[i][j]]) {
        counter++;
      }
    }
    arr1.push(counter);
    counter = 0;
    if (arr1.length === 3){
      arr2.push(arr1);
      arr1 = [];
    }
  }
  return arr2;
}

module.exports = {
  minesweeper
};
