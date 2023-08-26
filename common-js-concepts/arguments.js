// arguments is an array like object

function sum(a, b, c) {
    const args = [...arguments];
    console.log(args)
    let total = 0;
    for(let arg of args) {
        total += arg;
    }
    return total
}

const result = sum(4, 8, 9, 7, 5, 6);
console.log(result)