// default --> if value is not provided, take this as a default;
function add(num1= 0, num2 = 0) {
    const result = num1 + num2;
    console.log(num1, num2 ,result);
}

// const sum = add(5,7);
// const sum = add(5);
// const sum = add();

function fullName(first, last = '') {
    const full = first + ' ' + last;
    console.log(full);
}

// const myName = fullName('Shakil');

function numbers(nums = []) {
    console.log(nums)
}

// const allNumbers = numbers([1,2,4,5]);
// const allNumbers = numbers();

function person(human = {}) {
    console.log(human);
}

// const thePerson = person({name: 'john', age: 15})
const thePerson = person()

