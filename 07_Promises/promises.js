// creating a promise
const firstPromise = new Promise(function(resolve,reject) {
    setTimeout(() => {
        console.log('Promise');
    },1000);
    resolve()
    
})

// Consuming a promise
firstPromise.then(function(){
    console.log('The async task is successfully completed ');
})

// doing the same task without declaring a variable
new Promise((resolve,reject)=>{
    setTimeout(() => {
    console.log('Promise 2');
    },1000);
  resolve()
}).then(()=> console.log('The Promise is complete'))

// Retrieting Information from Promises
const thirdPromise = new Promise(function(resolve,reject) {
    setTimeout(() => {
        resolve({username: 'Arijit',Password:123}) ;
    },1000);
})
// using a callback function to get back the information
thirdPromise.then((user)=> console.log(user))

// if the promise is not properly returned 
const FourthPromise =new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error =true;
        if(!error){
            resolve({username:'Hitesh',Role:'teacher'})
        }else{
            reject('ERROR:Something Went Wrong')
        }
    },1000)
})

FourthPromise.then((user)=>console.log(user)).catch((user)=>console.log(user))

// chaining of promises
const FifthPromise =new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error =false;
        if(!error){
            resolve({username:'Hitesh',Role:'teacher'})
        }else{
            reject('ERROR:Something Went Wrong')
        }
    },1000)
})
// chaining then() command (the second then() will get the callback answer from the 
// first then() )
FifthPromise
.then((user)=>{
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=> console.log('the promise execution is done'))
// finally is a default command which will be executed regardless the promise
// was resolved or rejected.It is used to show that the execution of the promise
// is done.

// using Async Await instead of .then and .catch

const sixthPromise =new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error =true;
        if(!error){
            resolve({language:'javascript',core:'single-core'})
        }else{
            reject('ERROR:Something Went Wrong')
        }
    },1000)
})
// async await uses trycatch instead of thencatch
async function sixth(){
    try {
        let response = await sixthPromise
    console.log(response.language); 
    } catch (error) {
        console.log(error);
    }
}
sixth();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
}).then((call)=>{
    console.log(call);
})
.catch((error)=>console.log('ERROR:Something Went Wrong'))