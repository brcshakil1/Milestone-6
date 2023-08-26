// forEach, Map, Find, Filter, Reduce

const arr = [ 4, 5, 8, 7, 9, 6];
for(let item of arr) {
    console.log('Prothom Loop', item)
}
for(let i = 0; i < arr.length; i++) {
    console.log('Ditio Loop', arr[i])
}

let sum = 0;
// map
arr.map(item => sum+=item)

// forEach
arr.forEach(item => sum += item);
// console.log(sum);

// forEach function doesn't return anything
// map function return an array

const result = arr.forEach(item => item);
console.log(result)


