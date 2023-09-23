// creating a function to generate usernames
function createNames(username){
    this.username= username
}

// creating a second function where the first function will be called
function createUser(username,email,password){
    createNames.call(this,username)
    //here as the function calls the previous function ,proper execution context is needed 
    // to do that call method is used to get get the reference of the previous function
    // (this) is used to provide current context to username
    this.email = email
    this.password = password
}

const newUser =  new createUser("arijit","das03275@gmail.com",'123')
console.log(newUser);