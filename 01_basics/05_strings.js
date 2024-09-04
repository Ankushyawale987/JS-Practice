const name = "Ankush"
const repoCount = 50;

//console.log(name + repoCount + " Value"); // It is old days Usage Pattern

console.log(`My name is ${name} and my repo count is ${repoCount}`)
// It is `` not ''

const gameName = new String('An-ku-sh');
//console.log(gameName[0]);
console.log(gameName.__proto__);// return the empty object

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
 //console.log(gameName.indexOf('u')) // return the index number of t


 const newString = gameName.substring(0, 4);
 //console.log(newString);

 const anotherString = gameName.slice(-6, 4);
//console.log(anotherString)

const newStringOne = "  Ankush  "
// console.log(newStringOne);
// console.log(newStringOne.trim());// trime is used for the remove starting and ending space

const url = "https://hit%20esh.com/hitesh%20chouhdary"
console.log(url.replace('%20', '-'));
// replace is used to replace character from the string


console.log(url.includes('hitesh'));

// includes - It is used for the to check the strigng contains the that corresponding string or not
console.log(gameName.split('-'));
