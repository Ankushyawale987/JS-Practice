// // way 2
// new Promise(function(resolve, reject){
//     setInterval(function(){
//         console.log("Promise is Created")
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log("Async complited")
// })

// way 3
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({chai: "Piyo", biscuit:"Khao"}) // the paramter in the resolve is passed to the chai
//     }, 1000)
// }).then(function(chai){ // here chai parameter will take the resolve parameter
//  console.log(chai);
// })


// way 1 to handle errors

// let promise = new Promise(function(resolve, reject){
//     let cakeReady = false;
//     if(cakeReady){
//         resolve("Yes bhava gheun jaaa!");
//     }else{
//         reject("Cake is not ready still");
//     }
// });

// promise.then((message) => {
//     console.log(message); // This runs if the promise is resolved
// }).catch((ghenError) =>{
//     console.log("Ghen Lavdya error"); // This runs if the promise is rejected
// }).finally(() => {
//     console.log("Either promise is resolved or reject finally ko bc execute hona hai")
// })

// way 2 handle errors

const promise = new Promise(function(resolve, reject){
    setInterval(function(){
        let error = true
        if(!error){
            resolve("Error Tr Bhetla nhi")
        }else{
            reject("Ghen Error, pahije na ghe")
        }
    }, 2000)

});

async function fun(){
    try{
        const responce = await promise
        console.log(responce)
    }catch (ghe){
        console.log(ghe)
    }
}
fun()

