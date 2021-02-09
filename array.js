'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);             // 2
console.log(fruits[0]);                 // 'apple'
console.log(fruits[fruits.length -1]);  // 'banana'
console.log(fruits[2]);                 // undefined


// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index));    // 'apple' 0, 'banana' 1


// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push('Peach', 'Mango');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift('Lemon');
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
console.log(fruits);

// NOTE!! "shift, unshift" are slower than "pop, push"
// 앞에서부터 데이터를 입력, 제거하려면 배열안의 데이터들을 뒤, 앞으로 이동시켜야하기 때문이다.

// splice(start, deleteCount) : remove an item by index position
fruits.push('Strawberry');
// fruits.splice(1);                        // index 1 부터 모든 Data 삭제
fruits.splice(1, 1);                        // index 1 삭제
console.log(fruits);
fruits.splice(1,1, 'Apple', 'Watermelon');  // index 1 삭제 후 , 'Apple', 'Watermelon' 추가 
console.log(fruits);

// concat : combine two arrays
const fruits2 = ['Coffee', 'iced tea'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// indexOf : find the index
console.clear();
console.log(fruits);

console.log(fruits.indexOf('apple'));   // 0
console.log(fruits.indexOf('coffee'));  // -1

// includes
console.log(fruits.includes('apple'));  // true
console.log(fruits.includes('coffee')); // false

// lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);                        // (5) ["apple", "Apple", "Watermelon", "Strawberry", "apple"]
console.log(fruits.indexOf('apple'));       // 0
console.log(fruits.lastIndexOf('apple'));   // 4
