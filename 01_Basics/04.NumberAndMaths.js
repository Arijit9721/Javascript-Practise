const Num = new Number(500);
console.log(Num);
// find length of number by converting it to string and using length function
console.log(Num.toString().length);

// to convert number into floating number
console.log(Num.toFixed(2)); 

// to roundup a value 
const random = 25.6684864184
console.log(random.toPrecision(3));
console.log(random.toPrecision(2));

// to put comas in large number forbetter reading(in indian standard)
const large = 100000
console.log(large.toLocaleString('en-IN')); 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// converting negative values into absolute(Positive) values
console.log(Math.abs(-4));

// rounding of into whole number
console.log(Math.round(25.459494));

// always rounding of to the higher number
console.log(Math.ceil(2.00001)) 

// always rounding to the lower number
console.log(Math.floor(2.99999));

// find the min and max values
console.log(Math.min(2,4,5,8,-1))
console.log(Math.max(2,4,8,59594959));

// generating a random number between 0 and 1
console.log(Math.random()); 

// **Challenge : print a number bteween 1-6 to roll a dice
const minRoll = 1
const maxRoll = 6
console.log(`the roll is : ${Math.floor(Math.random()*(maxRoll-minRoll+1)+minRoll)}`);