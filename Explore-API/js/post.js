const allPost = document.getElementById('all-post');

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
loadPost()

function displayPost(posts) {
    posts.map(post => {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h4>User ID - ${post.userId}</h4>
        <h5>Title - ${post.title}</h5>
        <p>Post Description - ${post.body}</p>
        `;
        allPost.appendChild(div)
    })
}

const stuInfo = JSON.stringify({name:"james"});
console.log(stuInfo.name)