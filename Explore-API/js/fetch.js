// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json()) // it's close to JSON.parse()
//       .then(json => console.log(json))

// const url = 'https://jsonplaceholder.typicode.com/users';
// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))


function showData() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}