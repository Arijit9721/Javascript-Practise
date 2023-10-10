// arrays are divided into 2 types -contineous/packed or holey
// the contents inside the array is called elements.
// array types can be seen by installing the v8-debug engine from cli.

const myArray=[1,2,3,4,5];
// this is a packed or contineous array as it has no gaps
const myArray2=[1,2,,4,5];
// this is a holey array as it has a gap  in it.

// the elements inside the array can also be divided into types
// 1)packed small integer(packed smi)
const a1= [1,2,3]
// this is the most optimised array containing only numbers.Once an array is changed from
// this to any other form, it cannot be converted back.

// 2) Packed double elements(double,NaN,float,function,infinity)
a1.push(4.0)
// now a1 has become a packed double element. it is the 2nd most optimised array.

// 3)packed elements
a1.push('7')
// now the array is a basic a packed array. It is the least optimised among packed arrays.

a1[11]=11
// now the array has become holey.  it is the most unoptimised type of array.

console.log(a1);

// smi>>double>>packed>>holey smi>>holey double>>holey packed
// here packed means it is not smi or double
// you can only go down the list not up(the array can only get worse not better)

// holes are very expensive in javascript -->

// if you console log the hole part of a holey array, the returned answer will be undefined.
// this undefined is very expensive/unoptimtised as it takes lots of processing power 
// to find it. first the engine runs a bound check i.e,check to find whether the address
//  is inside an array or not.Then looks for the value of the address.Since it cannot find
// the value in the array, it starts searching for it using prototypes.At the end, once it
// cannot find the value,it returns undefined. this process is very expensive and causes 
// optimisation issues.

// wrong way of making a new array
const arr1 = new Array(3);
// makes an array with 3 holes

// right way of making a new array 
const arr2 = []
// makes an empty smi array