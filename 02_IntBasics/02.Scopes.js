sayHi()
function sayHi() {  // This method is called function declaration
    console.log( "Hello" );
  }
//   as the function is created by declaration , it can be called even before it is crreated.
// this is  because of hoisting

console.log(hello);
// this will not work as expression does not support hoisting
const hello = function hi(){ // this method is called function expression 
    console.log('hello')
}
