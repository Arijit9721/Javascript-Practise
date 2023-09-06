//  Map returns a new array of elements where you have applied some function on the element so that it changes the original element (typically).So map returns the same number of elements as the original, but the element value will be transformed in some way .

const myNumber = [1,2,3,4,5,6,7,8,9,10]

const newNumber = myNumber.map((nums)=> nums*10).map((nums)=>nums+1).filter((nums)=>nums<70)
console.log(newNumber);

// this method of using multiple prototypes together is called chaining.