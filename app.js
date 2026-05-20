"use strict";
async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('Сетевая ошибка');
    }
    const users = await response.json();
    return users;
}
function displayUsers(users) {
    const container = document.getElementById('users-container');
    container.innerHTML = '';
    const list = document.createElement('ul');
    for (const user of users) {
        const item = document.createElement('li');
        item.textContent = `${user.name} (@${user.username}) — ${user.email}`;
        list.appendChild(item);
    }
    container.appendChild(list);
}
async function loadUsers() {
    const container = document.getElementById('users-container');
    try {
        const users = await fetchUsers();
        displayUsers(users);
    }
    catch (error) {
        container.textContent = 'Не удалось загрузить пользователей.';
    }
}
document.getElementById('load-btn').addEventListener('click', loadUsers);
