// function declaration

// function add(a,b) {
//     const result = a + b;
//     return result;
// }

function add(a,b){
    return a + b;
}

// function expression
const add2 = function(a,b) {
    return a + b;
}

// arrow function
const add3 = (a,b) => a+b;
const add4 = (a,b,c,d) => a+b+c+d;
const multi = (a,b,c,d) => a*b*c*d;

const sum = multi(1,2,3,4);
console.log(sum);