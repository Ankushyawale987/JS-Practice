const user = {
  username: "Ankush",
  price: 999,
  welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`);
    
  }
}

// user.welcomeMessage()
// user.username = "Yawale"
// user.welcomeMessage()
// console.log(this)

/*
 function chai(){
   let username = "Ankush",
   console.log(this.username) // this will not use properly here
   
 }
 chai()
 */
 
// const chai = function() {
//   let username = "hitesh"
//   console.log  
// }
 
// chai()


const chai = () => {
   let username = "hitesh"
   console.log(this)
 }
 
 //chai()
 
 /* Basic Arrow Functions
 const addTwo = (num1, num2) => {
   return num1 + num2
 }
 
 console.log(addTwo(3, 4))*/
 
 // Implicite arrow Function
 // const addTwo = (num1, num2) => return num1 + num2
 
   const addTwo = (num1, num2) => ( num1 + num2) // no need to use return keyword
 console.log(addTwo(3, 4))