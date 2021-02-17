'use strict';
class UserStorage {
    async loginUser(id, password) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                return id;
            } else {
                return new Error('not found');
            }
        }, 2000);
    }

    async getRoles(user) {
        setTimeout(() => {
            if (user === 'ellie') {
                return {name: 'ellie', role: 'admin'};
            } else {
                return new Error('no access');
            }
        },1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id: ');
const password = prompt('Enter your password: ');

userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello! ${user.name}, you have a ${user.role} role`))
    .catch(console.log);
