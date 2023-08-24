class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep() {
        console.log(`sleeping now ${this.name}`);
    }
    activity() {
        this.sleep();
    }
}

const bokul = new Person('Bokul', 25);
console.log(bokul);
bokul.sleep();

const badam = new Person('Badam Kacha', 54);

console.log(badam)