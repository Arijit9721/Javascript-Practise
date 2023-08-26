let num = null
let typecast = Number(num);
// console.log(typecast)
console.log(1+2+'3'+4+5);
console.log('1'+2+3);
// everything ahead of string is considered number so the operation takes place, after the first
//  string everything is considered string  
let id1 = Symbol(123)
let id2 = Symbol(123)
console.log(id1 === id2);
const bigNumber = 5156484165151561651561616n
console.log(typeof bigNumber);
// pass by reference value example
const userOne = { user : 'Arijit',
                  email : 'xyz@gmail.com' } 
const userTwo = userOne;
userTwo.email = 'abc@gmail.com'

console.log(userOne.email);
console.log(userTwo.email);