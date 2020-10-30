const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr === undefined) return false;
  let result = [];
  let operations = ['--double-next','--double-prev','--discard-next','--discard-prev']
  for (let i = 0; i < arr.length; ++i ){
    if (typeof arr[i] === 'number'){
      result.push(arr[i]);
    } else {
      switch(arr[i]){
        case operations[0]:
          if(operations.indexOf(arr[i + 1]) < 0 && i < arr.length - 1)
          result.push(arr[i + 1 ]);
          break;
        case operations[1]:
          if(i !== 0 && operations[i - 2] !== operations[2])
            result.push(arr[i - 1]);
          break;
        case operations[2]:
        if (arr[i + 2] === operations[1]){
          i += 2;
        } else ++i;
          break;
        case operations[3]:
          if(i !== 0 && operations.indexOf(arr[i - 1]) < 0 && arr[i - 2] !== operations[2] ){
            result.splice(result.length - 1 ,1);
          }
            break;
        default: result.push(arr[i]);
          break;
        
      }
    }

  }
  return result;
};
