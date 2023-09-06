const myPromise = new Promise((resolve, reject)=> {
    const count = Math.random()*10;
    console.log(count)
    if(count < 5) {
        resolve(45454)
    } else {
        reject("No data found")
    }
    
});

myPromise
    .then(data=> console.log(data))
    .catch(err => console.error("ERR:", err))