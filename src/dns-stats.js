const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < domains.length; i++){
    let portionArr = domains[i].split('');
    for (let j = portionArr.length-1; j > -1; j--) {
      if (portionArr[j] === '.') {
        arr1.push(portionArr.splice(j).join(''));
      }
      else if (j === 0) {
        arr1.push('.' + portionArr.splice(j).join(''));
      }
    }
    let strPush = arr1.join('');
    arr1 = [];
    arr2.push(strPush);
  }
  
  const obj = {};
  for (let i = 0; i < arr2.length; i++) {
    let strArr = arr2[i].split('');
    for (let j = strArr.length; j > 0 ; j--) {
      const secondArr = strArr.map(value => value = value);
      if (secondArr[j] === '.' || j === strArr.length) {
        if (obj[secondArr.slice(0, j).join('')]) {
          obj[secondArr.slice(0, j).join('')]++;
        }
        else {
          obj[secondArr.slice(0, j).join('')] = 1;
        }
      }
    }
  }
  return obj;
}


module.exports = {
  getDNSStats
};
