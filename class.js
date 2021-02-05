'use strict';
// Object-oriendted programming
// class : template
// object : instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance


// 1. class declarations
class Person {
    // constructor
    constructor(name, age){
        // field
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name} : Hello!`);
    }
}

// Object 생성
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }
    set age(value) {
        this._age = (value < 0) ? 0 : value;
    }
}

const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age);


// 3. Fields (public, private)
// Too soon! : 사용하는 개발자 적음
class Experiment{
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);    // 2
console.log(experiment.privateField);   // undefined


// 4. Static properties and methods
// Too soon!
// Object, input data에 상관없이 공통적으로 Class에서 사용할때 (메모리 관리 차원) 
// static 호출시 Class 이름 사용
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1.publisher); // Object : undefined
Article.printPublisher();        // Class  : Dream Coding


// 5. Inheritance
// a way for one class to extend another class
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    // Overwriting
    draw() {
        super.draw();   // super : 부모 method 사용
        console.log('▲');
    }

    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking : instanceOf
// Object가 Class의 instance 인지 확인
console.log(rectangle instanceof Rectangle);    // true
console.log(triangle instanceof Rectangle);     // false
console.log(triangle instanceof Triangle);      // true
console.log(triangle instanceof Shape);         // true
console.log(triangle instanceof Object);        // true
