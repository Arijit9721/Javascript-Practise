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

// creating a command to find the actual length of the string 
const names = "arijit            ";
console.log(names.length);

// creating a function that gets becomes a feature of Objects
Object.prototype.trueLength =  function(){
    console.log(`The actual length of the string is ${this.trim().length}`);
}
// As all variables and functions are inherited from objects,when a property is assigned 
// to the object, all variables and functions automatically get access to this property 

// using the property
names.trueLength()

// Modern inheritance in javascript
const parent = {
    model:"AX20",
    speed:240
}
const child = {
    chassis:'aluminium'
}
Object.setPrototypeOf(child,parent)
// now child gets all the properties of the parent