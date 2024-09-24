// Singleton

// Object Literals

const mySym = Symbol("key1") // It is data Type
const JSuser = {
    // Key - Value
    // Key is treated as string
    name: "Ankush",
    "Full Name" : "Ankush Yawale",
    [mySym] : "mykey1",
    age: 23,
    location: "Amravati",
    email: "ankushyawale@goole.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JSuser.email)
console.log(JSuser["email"])
//These are the two ways that is used to access elements

console.log(JSuser["Full Name"])
console.log(JSuser[mySym]) // It the is way of accessing the symbol elements

/*
JSuser.email = "ankushyawale02@gmail.com"
// This is way of Updating the value of key
Object.freeze(JSuser)
JS.user.email = "ram@123"
console.log(JSuser)
// freeze will not allow to update
*/




JSuser.greeting = function(){
    console.log("Hellow JS user");
}

// task is to refer name from JSuser
JSuser.greetingTwo = function(){
    console.log(`Hellow JS user, ${this.name}`);
    // Back Ticks ``
    // this refer to the key value from the JSuser
    // Simply it is called the string Interpolation
}

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());

