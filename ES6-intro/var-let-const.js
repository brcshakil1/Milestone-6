/**
    var ⇒ No  reason to use var
    let ⇒ Allow you to reassign the variable
    const ⇒ Not allow you to reassign the variable
 */

const number = 45;
// number = 78;    you can't change this variable's value directly.  

const numbers = [1, 2, 3 , 4, 5, 6, 7, 8, 8];
// numbers = [45, 78, 56]
numbers[numbers.length - 1] = 9

const student = {
    name: "Shafiq Ahmed",
    roll: 5
}

// student = {name: "Rafiq Ali"}
student.name = 'Rafiq Ali'


let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    sum += num;
}
console.log(sum);
