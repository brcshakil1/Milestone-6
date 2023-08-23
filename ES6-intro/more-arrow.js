/**
 * Arrow function have a more concise syntax with an arrow (`=>`)
 * between the parameter list and function body. They omit curly braces `{}` 
 * if the function body consists of a single expression. If there more than one expression
 * or you need to use statements, you will need to enclose them in curly braces
 */

const difference = (a,b) => a - b;

const getNumber = (a,b,c) => {
    const sum = a + b + c 
    const multi = a * b * c
    const result = sum + multi

    return result;
}


console.log(difference(110, 100));
console.log(getNumber(2, 4, 6))