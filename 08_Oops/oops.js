// Object literals (the base unit of oops)

const newObj = {
    name:'arijit',
    rank:1,
    func: function call(){
        // here the function cannot access variables outside it's scope unless 
        // proper current context is provided by using (this.)
        console.log(this.name);
        // this returns all the values inside the object(the current context)
        console.log(this);
    }
}
console.log(newObj.func());

// Constructor Function are used to make induvidual objects easily.This helps in making
// the blueprint upon which other objects can be easily created.Ex- car-->car1,car2,car3 

//creating a car object 
const car = function(brand,name,topspeed) {
    // binding values to parameters with current context
    this.brand = brand
    this.name = name
    this.topspeed = topspeed
}

// creating multiple cars using the car object
const car1 = new car('audi','r8','200 kmph')
const car2 = new car('ferrari','spider','250 kmph')
const car3 = new car('buggati','veyron','300 kmph')
// new keyword has to be used, otherwise everytime a new object is created the old one's
// values will also change. 
// New and this keywords creates empty objects and stores all the information inside those. 
console.log(car1,car2,car3);

// constructor returns the datatypeof of  the object 
console.log(car1.constructor);

