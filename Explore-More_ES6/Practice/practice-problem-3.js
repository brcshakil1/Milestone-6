const instructor = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akil', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: 'Senior'}
]

const seniorInst = instructor.filter(person => {
    if(person.position.includes('Senior')) {
        console.log(person.name)
    }
});
