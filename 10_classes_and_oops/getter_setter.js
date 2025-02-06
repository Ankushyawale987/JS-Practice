class User{
  constructor(email, password){
    this.email = email;
    this.password = password;
  }
  
  get email(){
    return this._email.toUpperCase()
  }
  
  set(){
    this._email.toUpperCase()
  }
  
  get password(){
    return this._password.toUpperCase()
  }
  
  set password(value){
    this._password = value.toUpperCase()
    // setter never returns anything
  }
}


const hitesh = new User("h@gmail.ai", "abc")
console.log(hitesh.password)