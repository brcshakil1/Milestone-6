/**
 * 1. var let const 
 * 2. default parameter
 * 3. template string
 * 4. arrow function
 * 5. destructuring and spread operator
 * 6. Object.keys, Object.values, Object.entries
 * 7. for of loop used in Array and string
 * 8. for in loop used in object 
 */

const sum = (a,b) => a + b;

const fullName = (first, last) => `I'm ${first} ${last}. I'm a programmer and a professional web developer.`;

const swap = (a,b) => [a,b];
const [b,a] = swap(4,5);

const student = {
    id:1,
    name: 'Sabil Ahmed',
    country: "United States Of America",
    city: 'New York'
}
// Object.keys returns an array of objects properties
const keys = Object.keys(student);
console.log(keys)

// Object.values returns an array of objects values
const values = Object.values(student);
console.log(values)

// for of in Array
const numbers = [45, 12, 78, 56, 89];
for(let number of numbers) {
    console.log(number);
}

// for in in object
for(let keys in student) {
    console.log(keys, student[keys])
}