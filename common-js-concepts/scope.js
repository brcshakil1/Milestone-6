/**
 * There two main type of scope in javascript
 * 1. Global scope   2. Local scope
 */

const number = 45; // global scope. you can access it from anywhere from the 

function addNumber(a) {   // local scope
    console.log(a + number)
}

addNumber(number)