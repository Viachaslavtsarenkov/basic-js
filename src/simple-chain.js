const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr : [] ,
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    
     this.arr.push(value);
     return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.arr.length) {
      this.arr = [];
      throw "error";
  }
   this.arr.splice(position -1,1);
   return this;
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = "";
    for(let i = 0; i < this.arr.length;++i){
      if (i < this.arr.length - 1)
      result = result + `( ${this.arr[i]} )~~`;
      else result = result + `( ${this.arr[i]} )`;
    }
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
