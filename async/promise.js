'use strict';

// Promice is a JavaScript Object for asynchronous operation.
// State : pending -> fulfilled or rejected
// Produser vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically. (essential)
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(()=> {
        resolve('ellie');
        // reject(new Error(`no network`));
    }, 2000);
});


// 2. Consumers : then, catch, finally
promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);                 // 1 sec
});

fetchNumber
    .then(num => num * 2)   // 2
    .then(num => num * 3)   // 6
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);   // 2 sec
        });
    })
    .then(num => console.log(num)); // 5


// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hen'), 1000);
    });
const getEgg = hen => 
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => egg`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000);
    });
const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => cook`), 1000);
    });

getHen()
    .then(getEgg)
    .catch(error => {
        return 'bread';
    })
    .then(egg => cook(egg))
    .then(console.log)
    .catch(console.log);
