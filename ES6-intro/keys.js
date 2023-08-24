const glass = {
    name: 'glass',
    color: 'golden',
    price: 12, 
    isCleaned: true
}

console.log(glass)
// all properties name
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ];

// all properties values
const values = Object.values(glass);
// [ 'glass', 'golden', 12, true ]
// console.log(values);

const entries = Object.entries(glass);
// array of array, or two dimensional array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
// ]
// console.log(entries)

// delete properties from an object //

//1. delete glass.isCleaned;

// console.log(glass);

// 2. const {isCleaned, ...shortGlass} = glass;

// freeze oject
// Object.freeze(glass);
Object.seal(glass);
glass.source = 'bangladesh';
glass.price = 5000;


console.log(glass)