//for

//["", "", "", "",];
//[{}, {}, {}, {}];

const arr = [1,2,3,4,5];
// for(const num of arr){
//   console.log(num);
// }

const greetings = "Hellow World";
// for(const g of greetings){
//   console.log(g);
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map)

for(const [key, value] of map){
  //console.log(key, ':-', value);
}

// Iterations on Object
const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: 'ruby',
  swift: "swift by apple"
}

for(const key in myObject){
  //console.log(`${key} = ${myObject[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
  //console.log(key)
  // it will print index
  
  console.log(programming[key])
  // it will print values
}