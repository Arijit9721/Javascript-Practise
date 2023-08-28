const arr1 = [1,2,3]
const arr2 = new Array(1,2,3,4)
console.log(typeof arr1);
console.log(typeof arr2)

// array  Methods

arr1.push(4)
arr1.pop()
console.log(arr1);

// adding an element at the start of an array
arr1.unshift(0)
console.log(arr1);

// removing an element from the start of an array
arr1.shift()
console.log(arr1);

// checking for an element
console.log(arr1.includes(2))

//  finding index of an element
console.log(arr1.indexOf(1));

// changing all elements of an array into string
const newArray = arr1.join()
console.log(newArray);
console.log(typeof newArray);

// finding out all elements in a range(without changing the array)
const testArray = [0,1,2,3,4,5,6]
const slicedArray  = testArray.slice(1,4)
console.log(slicedArray);
console.log(testArray);

// finding out the elements in a range and also removing them from the array
console.log(`before spliced array : ${testArray}`);
const splicedArray = testArray.splice(1,4) 
console.log(splicedArray);
console.log(`The array after Splicing : ${testArray}`);

// ** qusetion --> what are the differences between Slice and Splice
// 1.slice runs before  range(if upper bound is 3,it goes till 2) ; Splice goes till range(if range is 3 , it goes till 3)
// **Exception --> if the lower bound  of both slice and splice  is (0),the answer will be same. Ex- (0,3) in both will return same answer

// 2. slice does not change the original array, Splice removes all elements in the range from the array 

//  concatenating 2 arrays(old method)
const marvel = ['Thor','Ironman','hulk']
const dc = ['flash','superman','batman']
const heroes = [marvel.concat(dc)]
console.log(heroes);

// Best way of concatenating --> through Spread method(...)
const newHero = [...marvel,...dc]
console.log(newHero);

// to remove arrays inside arrays and make it a single array
const  bigArray = [1,2,3,[4,5,6],7,8,[9,10,11,12,[13,14,15]]]
const smallerArray = bigArray.flat(Infinity)
console.log(smallerArray);

//  converting other datatypes into array
console.log(Array.from('arijit'))

// converting multiple datatypes into arrays
console.log(Array.of(1,2,'ram'))