let score = 33;
//console.log(typeof score);
//console.log(typeof(score));

let s = "33d";
//console.log(typeof s);
let valueInNumber = Number(s);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


let i = null; /// trite as object
//console.log(typeof i);

let j = undefined;
//console.log(typeof j);

// "33" => 33 // Number
// "33abb" => NaN // Not a Number
// true=>1; false=>0


let isLoggedIn = 1;
// let isLoggedIn = "Ankush"; //true
// let isLoggedIn = ""; //false
let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Ankush" => true

let a = 33;
let str = String(a);
//console.log(str);
//console.log(typeof str);
//********************Operations**************** */

//console.log(2 ** 3) // 2 the power 3 = 8
let str1 = "Ankush";
let str2 = " Yawale";
let str3 = str1 + str2;
//console.log(str3);

console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + 2 + 2);//122
console.log(1+ 2+ "2");// 32
