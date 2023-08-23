const max = Math.max(45, 15, 78, 56, 49);
const numbers = [4,5,6,7,8,9,5,1,2];
const arrayMax = Math.max(...numbers);
// console.log(...numbers)
// console.log(arrayMax)

// use spread operator to copy
const friends = ['Shahid', 'Arif', 'Epon', 'Emon'];
const bondhus = friends;
bondhus.push('Rahi');
const dustos = [...friends];
dustos.push('Abdus Samad');

// advance spread operator use
const dus = [...friends, 'Jakir']

console.log(friends, bondhus, dustos, dus);