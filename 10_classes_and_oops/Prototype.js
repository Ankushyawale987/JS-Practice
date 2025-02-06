/*
let myName = "Hitesh    ";
let myChannel = "Chai     ";
console.log(myChannel.trueLength;
*/

let myHeros = ["Thor", "Spiderman"]

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  
  getSpiderPower:function(){
     console.log(`Spidy power is ${this.spiderman}`);
  }
}

Object.prototype.hitesh = function(){
  console.log(`Hitesh is persent in all object`);
}

Array.prototype.heyHitesh = function(){
  console.log(`Hitesh says Hello`);
}
// heroPower.hitesh();

myHeros.hitesh();
myHeros.heyHitesh()
//heroPower.heyHitesh() - fail to execute


/******Inheritance*********/

const User = {
  name: "chai",
  email:"chai@google.com"
}

const Teacher = {
  makeVideo: true
}

const TeacherSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: 'JS Assignment',
  fullTime: true,
  __proto__: TeacherSupport
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode      "

String.prototype.truLength = function(){
  console.log(`${this}`)
  console.log(`True length is: ${this.trim().length}`);
}