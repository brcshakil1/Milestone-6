function greeting(greetingHandler, name) {
    greetingHandler(name);
}
const name = 'Shakib Khan'
const numbers = [4, 5, 6, 7, 8, 9]
const laptop = {price: 75000, name: 'mac'}

function greetingHandler(name) {
    console.log('Good morning', name)
}

function greetEvening(name) {
    console.log('Good evening', name);
}
function greetNight(name) {
    console.log('Good Night', name);
}

greeting(greetingHandler, 'Muskan')
greeting(greetingHandler, 'Mark Juccerbag');
greeting(greetingHandler, 'Tom Cruse');
greeting(greetEvening, 'Shakib Khan');
greeting(greetEvening, 'Allu');
greeting(greetNight, 'Sallu');