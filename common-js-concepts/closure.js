function kitchen() {
    let roast = 0;
    return function() {
        roast++
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())

const secondSever = kitchen();
console.log(secondSever())
console.log(secondSever())
console.log(secondSever())

console.log(firstServer())
