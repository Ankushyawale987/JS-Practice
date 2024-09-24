// Array Declaration
const myArr = [0,1,2,3,4,5]
// const myHeros = ["Shaktiman", "Naagraj"]
// const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[1]);


// Array Methods
// myArr.push(6)
// myArr.pop()

//myArr.unshift(9)
// unshift will add 9 at index 0 and rest of element are shift form index to next index
//myArr.shift() // remove 9
// shift will remove 0th index element
//myArr.shift() // remove 0
//console.log(myArr);


// console.log(myArr.includes(9))
//console.log(myArr.indexOf(3))

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr) // join will convert array to string


// slice and splice
console.log("A ", myArr)

const myn1 = myArr.slice(0, 3);
/*It will return array from 0th index to 3-1 index
It will not remove just return it and did not manupulate the slice as splice */
console.log(myn1)
console.log("B ", myArr);

const myn2 = myArr.splice(0, 3)
console.log(myn2);
console.log("C ", myArr);
/*Splice will return array from index 0th to 3rd index as well as it will remove also */









