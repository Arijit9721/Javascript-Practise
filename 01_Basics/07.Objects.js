// Object Literals(Literals :- Objects created using object literals are singletons. This means when a change is made to the object, it affects that object across the entire script.)
const User = {
    name: 'Arijit',
    "full name" : "Arijit das",
    age: 18,
    location: 'kolkata'
}
// accessing objects 
console.log(User.name)
console.log(User['full name']);
// ** the second method is used if the key is written in string format and calling symbols

// putting symbols in objects
const mySymbol = Symbol()
const myObject = {
    [mySymbol]: "Animesh",
    call: 'sanjib'
// only way of  using symbol in object is using []
}
//  only way of calling symbols in object is using [] but not using ""
console.log(myObject[mySymbol]);

// to freeze an object to stop changes to it
Object.freeze(User)
User.name = 'rahul'
// no change due to object being frozen
console.log(User.name)

// adding function in objects
myObject.greeting = function(){
    console.log("Hello nice to meet you");
}
console.log(myObject.greeting());

// adding function with key already present inside of object
myObject.calling = function(){
   console.log(`the call is for: ${this.call}`); 
}
console.log(myObject.calling())
