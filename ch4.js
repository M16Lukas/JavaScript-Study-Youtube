'use strict';

// 1. String concatenation
console.log('my' + 'cat');  // my cat
console.log('1' + 2);       // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`);


// 2. Numeric operators
console.log(1 + 1); // add, 2
console.log(1 - 1); // substract, 0
console.log(1 / 1); // divide, 1
console.log(1 * 1); // multiply, 1
console.log(5 % 2); // remainder, 1
console.log(2 ** 3); // exponentiation, 8


// Increment and decrement operators
let counter = 2;

const preIncrement = ++counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);

const postIncrement = counter++;
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement : ${preDecrement}, counter : ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement : ${postDecrement}, counter : ${counter}`);


// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;


// 5. Comparison operators
console.log(10 < 6);    // less than, false
console.log(10 <= 6);   // less than or equal, false
console.log(10 > 6);    // greater than, true
console.log(10 >= 6);   // greater than or equal, true


// 6. Logical operators : ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2; // false

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // simple한 변수를 제일 앞에 위치, heavy operation은 맨 뒤

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
/*
if(nullableObject != null){
    nullableObject.something;
}
*/

function check() {
    for(let i = 0; i < 10; i++) {
        // wastign time
        console.log('loooo');
    }
    return true;
}

// ! (not)
console.log(!value1);


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == : loose equality, with type conversion
console.log(stringFive == numberFive);  // true
console.log(stringFive != numberFive);  // false

// (recommended) === : strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const ellie1 = {name : 'ellie'}; // ref 1
const ellie2 = {name : 'ellie'}; // ref 2
const ellie3 = ellie1;           // ref 1

console.log(ellie1 == ellie2);  // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality - puzzler
console.log(0 == false);            // true
console.log(0 === false);           // false (type : number, boolen)
console.log('' == false);           // true  
console.log('' === false);          // false (type : string, boolen)
console.log(null == undefined);     // true
console.log(null === undefined);    // false


// 8. Conditional operators : if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellies!');
} else if (name === 'coder') {
    console.log('you are amazing coder');
} else {
    console.log('unknown');
}


// 9. Ternary operator: ?
// condition ? value1 : values2;
console.log(name === 'ellie' ? 'yes' : 'no');


// 10. Switch statement
// use for multiple if chacks
// use for enum-like value chack
// use for mulltiple type chacks in TS
const browser = 'IE';

switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while : ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while ${i}`);
    i--;
} while (i > 0);


// for loop, for(begin; condition; step)
for (let i = 3; i > 0; i -= 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops (Not recommended)
// O(n^2)
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }        
}


// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0)
        continue;
    else
        console.log(`even number : ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i > 8)
        break;
    else
        console.log(`count : ${i}`);
}
