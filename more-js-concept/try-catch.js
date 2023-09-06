const checkAge = () => {
    const ageField = document.getElementById('age-field');
    const age = parseFloat(ageField.value);
    const errorArea = document.getElementById('error');
    try {
        if(isNaN(age)) {
            throw "Please provide a number.";
        } else if(age < 18) {
            throw "bacca kacca isn't allowed"
        } else if(age > 30) {
            throw "You should rest"
        }
        errorArea.innerText = '';
    }
    catch(err) {
        console.log('Error:', err);
        errorArea.innerText = 'Error: ' + err;
    }

    finally {
        console.log('All is well')
    }
}