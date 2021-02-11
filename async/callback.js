'use strict';

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting : var, function declaration 이 자동적으로 코드 맨 위로 올라가는 것

console.log('1');                                           // 동기
setTimeout(() => console.log('2'),1000);                    // 비동기
console.log('3');                                           // 동기
/*
    result : 1 3 2
*/

// Synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));               // 동기

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);  // 비동기



// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        },1000)
    }
}

const UserStorage = new UserStorage();
const id = prompt('Enter your id: ');
const password = prompt('Enter your password: ');

UserStorage.loginUser(
    id, 
    password, 
    user => {
        UserStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello! ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {});
    },
    error => {console.log(error)}
    );