const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {

  constructor(request) {
    this.type = request;
  }
  encrypt(message, key) {
    if (typeof(message) !== 'string' || typeof(key) !== 'string'){
      throw new Error('Incorrect arguments!');
    }
    else {
    const mArr = message.toUpperCase().split('');
    const kArr = key.toUpperCase().split('');
    const indexesArr = [];
    const emptyM = [];
    const emptyK = [];
    const encryptArr = [];

    mArr.forEach((value, index) => {
      if (value === ' ') {
        indexesArr.push(index);
      }
    })
    
    mArr.forEach((value) => {
      if (value.codePointAt() >= 65 && value.codePointAt() <= 90){
        emptyM.push(value.codePointAt());
      }
      else {
        emptyM.push(value);
      }
    })

    kArr.forEach((value) => {
      emptyK.push(value.codePointAt());
    })
    
    emptyM.forEach((value, index, array) => {
      if (value === ' ') { 
        array.splice(index, 1);
      }
    })

    let multiplier = Math.ceil(emptyM.length/emptyK.length);
    for (let i = 0; i < multiplier; i++) {
      emptyK.push(...emptyK);
    }
    emptyK.splice(emptyM.length);
    
    
    for (let i = 0; i < emptyM.length; i++) {
      if(typeof(emptyM[i]) === 'number') {
        encryptArr.push(String.fromCharCode((emptyK[i] + emptyM[i])%26 + 65));
      }
      else {
        encryptArr.push(emptyM[i]);
      }
    }

    indexesArr.forEach((value) => {
      encryptArr.splice(value, 0, ' ');
    })
    if (this.type === true || this.type === undefined) {
      return encryptArr.join('');
    }
    else {
      return encryptArr.reverse().join('');
    }
    }
}
  decrypt(message, key) {
    if (typeof(message) !== 'string' || typeof(key) !== 'string'){
      throw new Error('Incorrect arguments!');
    }
    else {

    const mArr = message.toUpperCase().split('');
    const kArr = key.toUpperCase().split('');
    const indexesArr = [];
    const emptyM = [];
    const emptyK = [];
    const encryptArr = [];

    mArr.forEach((value, index) => {
      if (value === ' ') {
        indexesArr.push(index);
      }
    })
    
    mArr.forEach((value) => {
      if (value.codePointAt() >= 65 && value.codePointAt() <= 90){
        emptyM.push(value.codePointAt());
      }
      else {
        emptyM.push(value);
      }
    })

    kArr.forEach((value) => {
      emptyK.push(value.codePointAt());
    })
    
    emptyM.forEach((value, index, array) => {
      if (value === ' ') { 
        array.splice(index, 1);
      }
    })

    let multiplier = Math.ceil(emptyM.length/emptyK.length);
    for (let i = 0; i < multiplier; i++) {
      emptyK.push(...emptyK);
    }
    emptyK.splice(emptyM.length);
    
    
    for (let i = 0; i < emptyM.length; i++) {
      if(typeof(emptyM[i]) === 'number') {
        if (emptyK[i] > emptyM[i]) {
          encryptArr.push(String.fromCharCode(91 - (emptyK[i] - emptyM[i]))); 
        }
        else {
          encryptArr.push(String.fromCharCode((emptyM[i] - emptyK[i])%26 + 65));
        }
      }
      else {
        encryptArr.push(emptyM[i]);
      }
    }

    indexesArr.forEach((value) => {
      encryptArr.splice(value, 0, ' ');
    })
    if (this.type === true || this.type === undefined) {
      return encryptArr.join('');
    }
    else {
      return encryptArr.reverse().join('');
    }
  }
}
}


module.exports = {
  VigenereCipheringMachine
};
