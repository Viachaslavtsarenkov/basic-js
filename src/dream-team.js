const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let name =""
  let newArr = []
  if (members === null || members === undefined || members.length === undefined || typeof members !== 'object') return false;
  for(i = 0; i < members.length; ++i){
    if (members[i] instanceof String || typeof members[i] === 'string')
    newArr.push(members[i].toString().toUpperCase().trim());
  } 
  newArr = newArr.sort();
  for (let i = 0; i < newArr.length; ++i){
    if(newArr[i].trim().charCodeAt(0) >= 65 && newArr[i].trim().charCodeAt(0) <= 90){
      name = name + newArr[i].trim()[0];
    }
  }
  console.log( newArr);
  return name;
};
