/**
 * Truthy ---->
 * 1. true value is true
 * 2. any number is true
 * 3. any string is true
 * 4. all object is true even empty object
 * 5. all array is true even array object
 * 
 * Falsy ---->
 * 1. false value is false
 * 2. 0 is false
 * 3. '' (empty string) is false
 * 4. undefined is false 
 * 5. null is false
 * 
 */
const x = undefined;

if(x) {
    console.log('Value of x is truthy');
} else {
    console.log('value of x is falsy');
}

if(!x) {
    console.log('false')
} else {
    console.log('true')
}
if(!!x) {
    console.log('false')
} else {
    console.log('true')
}