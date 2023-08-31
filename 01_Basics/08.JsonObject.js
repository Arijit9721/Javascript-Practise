// destructuring objects to make access more easier
const course = {
    name: 'javascript Basics',
    price: "free",
    instructor: 'Hitesh'
}
const {name:anyName} = course
console.log(anyName);
