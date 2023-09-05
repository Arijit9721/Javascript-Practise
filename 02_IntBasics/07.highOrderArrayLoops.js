const testString = 'arijit'
const testArray = [1,2,3,4,5]
const testObject = {
    num: 1,
    case: 'test'
}

// For of loop (iterates till the end, similar to --> for i:array in c++)
// it works on arrays,maps,strings but not on objects
for (const i of testArray) {
    console.log(i);
}
for (const i of testString) {
    console.log(i);
}
    
// for iterating objects --> for in loop is used. It only return keys
// these keys can be then used to call the values. it works on everything except maps 
 
for (const i in testObject) {
   console.log(`${i} : ${testObject[i]}`);
}
// for int loop with array
for(const j in testArray){
    console.log(`the value position:${j} and it's value:${testArray[j]}`);
}

// for each loop (most used loop). this loop can run a function inside it
// it can be called directly using variable name 
const arr = ['java','ruby','javascript']
arr.forEach((randommName,index) => {
    console.log(index,randommName);
});

// array with objects inside it (with for each loop)
const myheroes = [
    {
    name: 'flash',
    rank: 1
},
{
    name: 'ironman',
    rank: 2
},
{
    name:'thor',
    rank:3
}
]
myheroes.forEach((item)=>{
    console.log(item.rank,item.name);
})