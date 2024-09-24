let a = 1000
const b = 20
var c = 30

// if(true){
//   let a = 20
//   console.log(a) // value is 20
// }
//console.log(a) // value is 1000
// console.log(b)
// console.log(c)

/*
function one(){
  const username = "Ankush"

  function two(){
    const website = "youtube"
    console.log(username) 
  }
  // console.log(website)  // it can not access

  two();

}

one();
*/
// if(true){
//   const username = "ANkush"
//   if(username === "ANkush"){
//     const website = "youtube"
//     console.log(username + website)
//   }
//   console.log(website) 
// }


//************* Interesting */

//These are the two types of functions declarations
console.log(addone(5))
function addone(num){
  return num + 1;
}
 

const addTwo = function(num){
  return num + 2 
}

console.log(addTwo(5))