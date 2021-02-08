// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = {key : value};


// 1. Literals and properties

const obj1 = {};            // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);  //true

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);  // undefined


// 2. Computed(계산된) properties
// key should be always string 

console.log(ellie.name);    // ellie
console.log(ellie['name']); // ellie (key : string type)
console.log(ellie.hasJob);  // undefined

ellie['hasJob'] = true;
console.log(ellie.hasJob);  // true


function printValue(obj, key) {
    // console.log(obj.key);   // undefined
    console.log(obj[key]);
}

printValue(ellie, 'name');  // ellie
printValue(ellie, 'age');


// 3. Property value shorthand

const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};

const person4 = new Person('ellie', 30);

// 4. Constructor Function

function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}


// 5. in operator : property existence check (key in obj)

console.log('name' in ellie);       // true
console.log('random' in ellie);     // false
console.log(ellie.random);          // undefined


// 6. for..in vs for..of
// for (key in obj)

console.clear() // log page clear
for (key in ellie){
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 5, 6, 7, 30];
for(value of array){
    console.log(value);
}


// 7. Fun cloning

const user = {name: 'ellie', age: 24};  // ref 1
const user2 = user;                     // ref 1

user2.name = 'coder';
console.log(user);  // {name: 'coder', age: 24}

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

// Object.assign(dest, [obj1, obj2, obj3...]) 
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mix = Object.assign({}, fruit1, fruit2);
console.log(mix.color); // blue : key 가 동일할 경우 value를 덮어씀
console.log(mix.size);  // big