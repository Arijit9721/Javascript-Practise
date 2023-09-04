// finding out the name of the month

let month = 10
switch (month) {
    case 1:
        console.log(`the month is : January`);
        break;
    case 2:
        console.log(`the month is : February`);
        break;
    case 3:
        console.log(`the month is : March`);
        break;
    case 4:
        console.log(`the month is : April`);
        break;
    case 5:
        console.log(`the month is : May`);
        break;
    case 6:
        console.log(`the month is : June`);
        break;
    case 7:
        console.log(`the month is : July`);
        break;
    case 8:
        console.log(`the month is : August`);
        break;
    case 9:
        console.log(`the month is : September`);
        break;
    case 10:
        console.log(`the month is : October`);
        break;
    case 11:
        console.log(`the month is : November`);
        break;
    case 12:
        console.log(`the month is : December`);
        break;

    default:
        console.log(`Not a valid month`);
        break;
}

// null coalesing operator (??)

let a
let b
let c
let d
a = null ?? 10
b = undefined ?? 10
c = 5 ?? 10
d = 10 ??  null
console.log(a,b,c,d);

// often in databases two values are returned. Using this operator, if one value is 
// null or undefined , the other value is taken. If both values are not null or
// undefined, the first value is taken.
