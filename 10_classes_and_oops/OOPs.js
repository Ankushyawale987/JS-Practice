// Object Literal

const user = {
    username: "Hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log("Got user details from database");
        //console.log(this);// here the complete current deatils is assigned
    }
}


// console.log(user.username);
//console.log(user.getUserDetails());
// console.log(this);// only current context has been assigned

/************ Constructor Function *************/
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const userOne = User("Hitesh", 12, true)
const userTwo = new User("ChaiaurCode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);
//new 
