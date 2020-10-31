const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  if (options.separator === undefined){
    options.separator = '+';
   
  }
  
  if (options.repeatTimes === undefined){
    options.repeatTimes = 1;
   
  }
  let result = '';
  for (let i = 0; i < options.repeatTimes; ++i){
    result = result + str;
    for (let j = 0; j < options.additionRepeatTimes; ++j){
      if(j < options.additionRepeatTimes -1 ){
        result = result + options.addition + options.additionSeparator;
      } else{
        result = result + options.addition;
      }
    }
    if(i < options.repeatTimes - 1){
          console.log(options.separator);
        result = result + options.separator;
    }
    if (options.additionRepeatTimes === undefined && options.addition !== undefined){
      result = result + options.addition;
    }
  }
  return result ;
};
  