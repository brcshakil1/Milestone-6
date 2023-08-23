const actor = {
    name: 'Ananta',
    age: 35,
    phone: 175454654,
    money: 12546879456
}

// const phone = actor.phone;
// const age = actor.age;
// const name = actor.name;

// if right side is an object then the left side will be an object too when you are destructuring

const {phone, age, name} = actor;

// console.log(phone, age, name);
// console.log(phone, age, name);
// console.log(phone, age, name);

// if right side is an array then left side will be an array too

const array = [45, 12, 78];

const [a,b,c] = array;

console.log(a,b,c)

function doubleIt(num1,num2){
    return [num1*2, num2*2];
}

const [x,y] = doubleIt(5,10);
console.log(x,y);