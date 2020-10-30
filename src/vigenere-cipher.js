const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value = true){
    this.reverse = value;
  }
  encrypt(phrase, key) {
    if (phrase === undefined) return null;
    let result ="";
    let reverseMessage= "";
    var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";	
    phrase = phrase.toUpperCase();
    key = key.toUpperCase();
    let index = -1;
    for (let i = 0; i < phrase.length;  ++i){
      if (index === key.length - 1) index = -1;
      if (phrase[i].charCodeAt() >= 65 && 
        phrase[i].charCodeAt()<=90){
          index++;
          let k = (alph.indexOf(phrase[i]) + 
          alph.indexOf(key[index])) % 26;
          result = result + alph[k];
          
          continue;
      }
      else{
      result = result + phrase[i];
      }
    }
    if (!this.reverse){
      result = result.split('').reverse().join('');
    }
    return result;
  }    
  decrypt(phrase, key) {
    let result ="";
    var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";	
    phrase = phrase.toUpperCase();
    key = key.toUpperCase();
    let index = -1;
    for (let i = 0; i < phrase.length;  ++i){
      if (index === key.length - 1) index = -1;
      if (phrase[i].charCodeAt() >= 65 && 
        phrase[i].charCodeAt()<=90){
          index++;
          let k = (alph.indexOf(phrase[i]) + 26 - 
          alph.indexOf(key[index])) % 26;
          result = result + alph[k];
          
      }
      else{
      result = result + phrase[i];
      }
      
    }
    if (!this.reverse){
      result = result.split('').reverse().join('');
    }
    return result;
  }
}

module.exports = VigenereCipheringMachine;
