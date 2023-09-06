console.log(1)
console.log(2)
let num = 0;
const intervalId = setInterval(()=>console.log(num++), 1000);
clearInterval(intervalId);
console.log(4)
console.log(5)
console.log(6)
console.log(7)