// console.log('app.js')

console.log(user)
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUserName(data))
}

function displayUserName(data) {
    const ul = document.getElementById('user-container');
    data.map(user => {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li)
    })
}