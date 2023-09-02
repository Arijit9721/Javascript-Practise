const user = {
    userName: 'arijit',
    balance: 100,
    userMessage: function(){
        console.log(`hello ${this.userName} , welcome to the website`);
        // this makes sure that the username is not hard coded
    }
}
user.userMessage()
user.userName = 'Rahul'
 user.userMessage() 
//  everytime the username is changed , the userMessage is automatically updated
// due to (this.)

console.log(this)
// ** printing this globally in IDE/Code editor will return blank as there is no global context.
// ** printing this globally in browser will return Window as it records all context in that
// window

const ram = () => {
 name = 'arijit'
 return `the name is ${this.name}`
}
console.log(ram());
// this does not work in any functions and always returns undefined

const arrow = () => ([10,20,30])
console.log(arrow());
// if the function is of a single line, () should be used instead of {} in arrow functions.
// also return does not need to be used. this is called impicit return.