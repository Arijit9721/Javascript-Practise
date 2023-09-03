// Immediately Invoked Function Expression (IIFE)
// it is used to immediately invoke a function and to stop global scope pollution
// it is  done by putting the function in a () and another () to execute it

(function call(){ // it is a named IIFE(because of name 'call')
    console.log(`database connected`);
}) ();
// here the function is wrapped in a () and another () to immediately call the function
// ; is a must otherwise the next function will return error

((sad) => { // it is an unnamed IIFE (as there is no name of it )
    console.log(`database 2 connected ${sad}`)
})('again');

