// Practice Problem 1.1
const multiply = (num1, num2, num3) => num1 * num2 * num3;

// Practice Problem 1.2
const myself = `I am a developer.
I love to code.
I love to eat biryani.`;

// Practice Problem 1.3
const getFullName = (firstName, lastName = 'Chowdhury') => `${firstName} ${lastName}`;

// Practice Problem 2
const EventFriend = friends => {
    let even = []
    for(let friend of friends) {
        if(friend.length % 2 === 0) {
            even.push(friend)
        }
    }
    return even;
}

// Practice Problem 3
const squareNumber = numbers => {
    let sum = 0;
    for(let number of numbers) {
        sum += Math.pow(number, 2)
    }
    const avg = sum / numbers.length;
    return avg
}

// Practice Problem 4
const maxValueOfArray = (arr1, arr2) => {
    const combineArray = [...arr1, ...arr2];
    const maxValue = Math.max(...combineArray);
    console.log(maxValue)
}



