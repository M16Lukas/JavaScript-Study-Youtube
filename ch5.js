// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming : doSomething, command, verd
// e.g. createCardAndPoint -> createCard, createPoint
// function is "object" in JS

function printHello() {
    console.log('Hello');
}

printHello();

function log(message) {
    console.log(message);
}

log('Hello!');


// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}

const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie.name);


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}

showMessage('Hi!'); // Hi! by undefined -> Hi! by unknown


// 4. Rest parameters (added in ES6)
// ... : 배열 형태로 전달
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'ellie');


// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global';   // global variable
function printMessage() {
    let message = 'HELLO';
    console.log(message);       // local variable
    console.log(globalMessage);
    function printAnother(message) {
        console.log(message);
        let childMessage = 'HI!';
    }
    // console.log(childMessage); // Error
}
printMessage();


// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);


// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}


// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argment to other functions.
// can be returned by another function

// 1. Function expretion
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution raaches it.
const print = function () { // anonymous function
    console.log('print');
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {  
    console.log('YES');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print () {
    console.log('NO');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//     console.log('simplePrint');
// };

const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;


// IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();


// Quiz
// function calculate(command, a, b)
// command : add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch(command){
        case 'add':
            return console.log(`command : ${command}, result : ${a + b}`);
        case 'substract':
            return console.log(`command : ${command}, result : ${a - b}`);
        case 'divide':
            return console.log(`command : ${command}, result : ${a / b}`);
        case 'multiply':
            return console.log(`command : ${command}, result : ${a * b}`);
        case 'remainder':
            return console.log(`command : ${command}, result : ${a % b}`);
        default:
            throw Error('unknown cammand');
    }
}

let numberOne = 7;
let numberTwo = 4;
calculate('add', numberOne, numberTwo);
calculate('substract', numberOne, numberTwo);
calculate('divide', numberOne, numberTwo);
calculate('multiply', numberOne, numberTwo);
calculate('remainder', numberOne, numberTwo);
calculate('func', numberOne, numberTwo);
