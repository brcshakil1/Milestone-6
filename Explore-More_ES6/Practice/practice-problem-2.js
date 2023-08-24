const myArray = [33, 50, 79, 78, 90, 101, 30];
// divisible by 10 using filter
const divisibleBy10 = myArray.filter(number => number % 10 === 0);
console.log(divisibleBy10);

// find

const divisibleBy10Find = myArray.find(num => num % 10 === 0);
console.log(divisibleBy10Find);
