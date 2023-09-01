function addTwoNumbers(a,b){
// hen making Functions the values passed inside () are called Parameters.
console.log(a+b);
} 
addTwoNumbers(10,12)
// when calling the function the values passed inside () are called Arguments.

// importance of return
const result = addTwoNumbers(10,12)
console.log(result);
// the value of the varaible will be undefined as the answer is printed in console log
//  but not returned
function ofNumbers(a,b){
    return a+b;
    } 
const value = ofNumbers(10,12)
console.log(value);
// now the value of the variable will return the right answer

// create a message to indicate the user has logged in
function userMessage(username){
    if(!username){
       return  `please enter a valid username`;   
    }
    else{
    return `${username} has logged in at  ${new Date().toLocaleString('en-IN')}`
    }
}
console.log(userMessage('arijit'));
console.log(userMessage());

// ** alternate method with minimum parameter
function userMess(username = 'guest'){
    return  `${username} has logged in at  ${new Date().toLocaleString('en-IN')}`
} 
console.log(userMess('ari'));
console.log(userMess());
// if username is incorrect the argument gusest will be taken

