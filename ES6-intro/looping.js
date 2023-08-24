const numbers = [1, 2, 4, 5, 7, 8];
// for loop
// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// while loop
// let i = 0;
// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i++;
// }

// for of 

// for(let number of numbers) {
//     console.log(number);
// }

const glass = {
    color: 'blue',
    price: 150,
    model: 'EF150'
}

// You can't excess an object with for of loop
// for(let key of glass) {
//     console.log(key)
// }

// You can excess an object with for in loop
for( let key in glass) {
    console.log(key, glass[key]);
}

const keys = Object.keys(glass);

for(let key of keys) {
    console.log(key, glass[key])
}