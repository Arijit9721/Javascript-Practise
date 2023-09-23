function myFunc(num){
    return num*5;
}
console.log(myFunc(5));
// checking for prototype properties in functions
myFunc.power=2;
console.log(myFunc.power);
console.log(myFunc.prototype);
// this proves that everything in js, even arrays and functions have properties like 
// Objects.All the programming constraints like function, class, Arrays are derived 
// from the Object's Prototype. 

// creating own prototypal features
function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.myProto = function() {
    console.log(`the username is ${this.username}`);
}

// creating an user and appending the created feature to the user with (new) keyword
const user1  =  new createUser('arijit',250)
user1.myProto()