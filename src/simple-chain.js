const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  prop: [], 
  getLength() {
    return this.prop.length;
  },
  addLink(value = '(  )') {
    this.prop.push(`( ${value} )`);
    return this;
  },
  removeLink(ind) {
    if (this.prop[ind] === undefined || ind === 0 || ind > this.prop.length-1){
      this.prop = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    else {
    this.prop.splice(ind-1, 1)
    return this;
    }
  },
  reverseChain() {
    this.prop.reverse();
    return this;
  },
  finishChain() {
    let newprop = this.prop.map((value) => value = value);
    this.prop = [];
    return newprop.join('~~');
  }
};

module.exports = {
  chainMaker
};
