const userEmail = []

if(userEmail){
  console.log("Got user email");
}else{
  console.log("Don't have user email");
}

/*
falsy Values

false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/

/*
truthy Values

"0", 'false', " ", [], {}, function(){}
*/


// syntax for to check object is empty or not
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
  console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
//val1 = null ?? 11 ?? 10
console.log(val1);


//Terniary Operator
// Condition ? true : false

