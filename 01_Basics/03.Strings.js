const num = 55
const str = "Ramesh"
console.log(`The age of ${str} is :${num}`);
// use this instead of  (str + num) as this is thee current method
const name = new String('Ari-jit')
// this method of making string makes each alphabet into an object 
console.log(name);
console.log(typeof name);
console.table([name.__proto__,name[2],name.length,name.charAt(0),name.indexOf("t")]);
const subString = name.substring(0,5)
const sliceString = name.slice(-4,3)
// slice can take negative values , substring cannot
console.log(subString)
console.log(sliceString);
// split a word by a notation or space
console.log(name.split('-'))

// Replace a word with another
const email = 'arijit@gmail.com'
console.log(email.replace('gmail','hotmail'));

// find if a word is present
console.log(email.includes('gmail'))

// repeating a word
const str1 = 'Hello! '
console.log(`${str1.repeat(7)} nice to meet you ${email.slice(0,6)}`)

// removing space between words
const na = '  Arijit   '
console.log(na.trim());