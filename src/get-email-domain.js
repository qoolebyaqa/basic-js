const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(value) {
  const arrV = value.split('');
  let ind;
  while (arrV.includes('@')){
    ind = arrV.indexOf('@');
    arrV.splice(ind, 1);
  }
  return arrV.splice(ind).join(''); 
}

module.exports = {
  getEmailDomain
};
