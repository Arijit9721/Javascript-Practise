// using fetch with promise

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
}).then((call)=>{
    console.log(call);
})
.catch((error)=>console.log('ERROR:Something Went Wrong'))

// fetch using async

async function getInfo(){
    try {
        const url = await fetch('https://jsonplaceholder.typicode.com/users')
        const resp = await url.json()
        console.log(resp);
    } catch (error) {
        console.log('ERROR:Something Went Wrong');
    }
}