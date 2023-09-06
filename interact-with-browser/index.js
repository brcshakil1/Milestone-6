const handleSetItem = () => {
    const keyField = document.getElementById('key-field');
    const valueField = document.getElementById('value-field');
    
    const key = keyField.value;
    const value = valueField.value;

    localStorage.setItem(key, value);
}

const handleGetItem = () => {
    const container = document.getElementById('item-container');
    const getField = document.getElementById('get-field');
    const getItem = localStorage.getItem(getField.value);
    const item = JSON.parse(getItem);
    container.innerText = `Value: ${item.job}`
}


const person2 = {
    name:'John wick',
    age:40, 
    job: 'Mafia'
}

const person2Stringify = JSON.stringify(person2);
localStorage.setItem('person2', person2Stringify)