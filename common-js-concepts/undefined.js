/*
 8 ways to get undefined
1. variable that is not initialized will give undefined
2. function with no return
3. parameter that is not passed will be undefined
4. if return has nothing on the right side then it will be undefined
5. if object doesn't exist the property you are looking for then the value will be undefined
6. accessing array element outside of the range will be undefined
7. deleting an element inside of an array
8. if you passed a variable's value undefined the it will be undefined too;
*/

let first;
// console.log(first)

function second(a,b) {
    const sum = a + b;
}
// console.log(second(4,5));

function third(a,b, c, d, e) {
    const sum = a + b + c + d + e;
    // console.log(a,b,c,d,e);
}
third(4,5);

function fourth(a,b) {
    if(a < 0 || b < 0) {
        return 
    }
    return a + b;
}

// console.log(fourth(4,-5));

const fifth = {id:1, name: 'shakil'};
console.log(fifth.age)

const sixth = [4,5,7,8];
// console.log(sixth[1], sixth[4], sixth[100])

// seventh
const seventh = delete sixth[2];

const eighth = undefined

console.log(eighth)