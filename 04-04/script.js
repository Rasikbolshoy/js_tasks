const getBtn = document.getElementById('get-btn');
const addBtn = document.getElementById('add-btn');
const updateBtn = document.getElementById('update-btn');
const deleteBtn = document.getElementById('delete-btn');
const url = 'http://localhost:3000/users';

getBtn.addEventListener('click', async () => {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
    }    
})

const addForm = document.getElementById('add-form');

addForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
    const newUser = { name, email, password };
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });
    if (response.ok) {
        const data = await response.json();
        console.log(data);
    }
});

const userList = document.getElementById('user-list');

async function renderUserList() {
    const response = await fetch(url);
    if (response.ok) {
        const users = await response.json();
        users.forEach(user => {
            const userItem = document.createElement('li');
            userItem.innerHTML = `<div>Name: ${user.name}</div> <div>Email: ${user.email}</div> <div>Password: ${user.password}</div>`;
            userList.appendChild(userItem);
        });
    }
}









