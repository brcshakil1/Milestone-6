function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser2(data))
}

function displayUser2(data) {
    const ul = document.getElementById('user-container');
    data.map(user => {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li)
    })
}