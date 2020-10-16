const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];
  let arr2 = [];
  for (let i =0 ; i < arr.length; ++i){
    if (typeof arr[i] === 'string' || typeof arr[i] === 'int'){
      arr2.push(arr[i]);
    }
  }
  arr = arr2;
  for (let i = 0; i < arr.length; ++i ){
    if ( arr[i] == '--double-next' && i !== arr.length -1){
      result.push(arr[i + 1]);
      continue;
    }
    if (arr[i] == '--double-prev' && i !==0){
      result.push(result[i - 1]);
      continue;
    } 
    if (arr[i] == '--discard-next' && i !== arr.length -1){
      if (typeof arr[i + 2] !== 'string')
      i += 2;
      i += 3;
    }
    if (arr[i] == '--discard-prev' && i !==0){
      result.splice(i - 1, 1);
      continue;
    }
    
  if ((i === 0 || i === arr.length -1) && typeof arr[i] === 'string') continue;
    result.push(arr[i]);
  }
  console.log(result);
  return result;
};
