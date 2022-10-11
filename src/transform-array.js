const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(array) {
  
  if (Array.isArray(array)) {
    const arrTransform = array.map(elem => elem);
    for (let i = 0; i < arrTransform.length; i++) {
      if (typeof(arrTransform[i]) === 'string'){
        if (arrTransform[i] === '--discard-next') { 
          if (i === arrTransform.length-1) {
            arrTransform.splice(arrTransform.length-1, 1, 0);
          }
          else {
            arrTransform.splice(i, 2, 0, 0);
          }
        }
        else if (arrTransform[i] === '--discard-prev') {
          if (i === 0){
            arrTransform.splice(0, 1, 0);
          }
          else {
            arrTransform.splice(i-1, 2, 0, 0);
          }
        }
        else if (arrTransform[i] === '--double-next') {
          if (i === arrTransform.length-1){
            arrTransform.splice(arrTransform.length-1, 1, 0);
          }
          else {
            arrTransform.splice(i, 1, arrTransform[i+1]);
          }
        }
        else if (arrTransform[i] === '--double-prev') {
          if (i === 0){
            arrTransform.splice(0, 1, 0);
          }
          else {
            arrTransform.splice(i, 1, 0)
            arrTransform.splice(i-1, 0, arrTransform[i-1]);
          }
        }
      }
    }
    while (arrTransform.includes(0)){
      arrTransform.splice(arrTransform.indexOf(0), 1);
    }
    return arrTransform;
  }
    else {
      throw new Error("\'arr\' parameter must be an instance of the Array!");
    }
    
  }

module.exports = {
  transform
};
