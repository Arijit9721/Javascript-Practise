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
// if username is incorrect the argument guest will be taken

// when the number of parameters is unknown(rest parameter)
function addToCart(...num1){
    return console.log(num1);
}
addToCart(200,55,235,897)

// passing objects in functions
const newObj = {
    item: 'keyboard',
    price: 299
}
function priceChecker(anyData){
    console.log(`the item is: ${anyData.item} and the price is: ${anyData.price}`);
}
priceChecker(newObj)

// passing arrays in functions
const priceArray = [254,955,1250,1987]
function passArray(anyArray){
    console.log(anyArray[1]);
}
passArray(priceArray)
