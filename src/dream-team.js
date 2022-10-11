const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(array) {
  let collectArr = [];

  if (Array.isArray(array)) {
  for (let i = 0; i < array.length; i++){
    if (typeof(array[i]) === 'string'){
      for(let j = 0; j < array[i].length; j++){
        if (array[i][j] !== ' '){
          collectArr.push(array[i][j].toUpperCase());
          break;
        }
      }
    }
  }
  return collectArr.sort().join('');
  
}
else return false;
}

module.exports = {
  createDreamTeam
};
