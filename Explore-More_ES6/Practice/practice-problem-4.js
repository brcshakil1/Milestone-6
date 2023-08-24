const people = [
    {name: 'Meena', age:20},
    {name: 'Rina', age:15},
    {name: 'Suchorita', age:22},
]
// sum age using reduce
const sum = people.reduce((total, person)=> total + person.age ,0);
console.log(sum);

// for loop
let total = 0;
for(let i = 0; i < people.length; i++) {
    const person = people[i];
    total += person.age;
}
console.log(total)