let myDate = new Date()
console.log(typeof myDate);
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

let myNewDate = new Date('02-21-2023')
console.log(myNewDate.toDateString());

// find the tamestamp(from 1/1/1970)
let Timestamp = Date.now()
console.log(Timestamp);
console.log(myNewDate.getTime());

// ** Challenge : convert miliseconds into seconds
console.log(Math.floor(Date.now()/1000))

// customising localestring and stating the entire name of the day
console.log(myDate.toLocaleString('default',{weekday : 'long'}));