// The Javascript arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left to right) and the return value of the function is stored in an accumulator. 

const num = [1,2,3,4,5]
const initialValue = 0
const newNum = num.reduce((acc,item)=> acc+item,initialValue)
console.log(newNum);

// here we have to assign an initial value to start the operation,then along with 
// number we need a second callback to store each iterated value (acc)..