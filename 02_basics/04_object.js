// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

  const regularUser = {
    email: "someone@gmail.com",
    fullname: {
      userfullname: {
        firstname : "hitesh",
        lastname : "choudhary"
      }
    }
  }
  // console.log(regularUser.fullname.userfullname.firstname)
  // combine Objects
  
  const obj1 = {1: "a", 2:"b"}
  const obj2 = {3: "a", 4:"b"}
  const obj4 = {5: "a", 6:"b"}
  
  //const obj3 = {obj1, obj2}
  // const obj3 = Object.assign({}, obj1, obj2, obj4)
  // console.log(obj3)
  
  
  const obj3 = {...obj1, ...obj2, ...obj4}
  //console.log(obj3)
  
  const users = [
    {
      id: 1,
      email: "ankush@microsoft"
    },
    {
      id: 1,
      email:"jiva@123"
    }
    ]
    
    //console.log(users[1].email)
    
    console.log(tinderUser)
    console.log(Object.keys(tinderUser))
    console.log(Object.values(tinderUser))
    console.log(Object.entries(tinderUser))
    //entries will convert easy key-value pair into array
    
     console.log(tinderUser.hasOwnProperty('isLoggedIn'))
     
    
    
     /*De-structuring of Object*/
    
     const course = {
      coursename: "JS in hindi",
      price: "999",
      courseInstructor: "Hitesh"
      
    }
    
    // coourse.courseInstructor 
    
    const {courseInstructor: instructor} = course
    console.log(instructor)
    
    
    
  