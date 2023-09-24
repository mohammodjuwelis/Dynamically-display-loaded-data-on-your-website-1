function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => displayShow(data))
}

function displayShow(users) {
    // console.log(data)
    const ul = document.getElementById('user-lists');
    for(let i = 0; i < users.length; i++) {
        // console.log(users[i].name);
        const li = document.createElement('li');
        li.innerText = users[i].name;
        ul.appendChild(li);
    }
}