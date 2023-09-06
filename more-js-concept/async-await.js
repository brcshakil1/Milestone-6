const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = response.json();
    console.log(data)
}

getData()