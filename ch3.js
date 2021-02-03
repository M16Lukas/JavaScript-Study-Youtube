// 1. Use strict
// added in ES 5
// use this for valina JS

'use strict';


// 2. Variable, rw (read/write)
// let : added in ES 6

let globalName = 'Hello';
{
    let name = 'allie';
    console.log(name)
    name = 'hello';
    console.log(name);
}


// var (don't ever use this!)
// var hoisting : 어디에 선언했는지와 상관없이 항상 맨 위로 선언을 끌어올려주는 동작 (move declaration from bottom to top) 
// has no block scope : 블럭 안에 있더라도 밖에서 호출가능
{
    age = 4;
    var age;
}
console.log(age);


// 3. Constant, r(read only)
// use const whenever possible.
// only use "let" if variable needs to change.

const daysInWeek = 7;

// Note!
// Immutable data types : primitive types, frozen objects (i.e. object.freeze())
// Mutable data types : all "objects" by default are mutable in JS
// favor immutable data type always for a few reasons : 
// - security
// - thread safety
// - reduce human mistakes


// 4. Variable types
// primitive, single item : number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function


// number : 모든 숫자 타입

// bigInt (fairly new, dont use it yet)
const bigInt = 1234567890123345670234234n;
console.log(`value : ${bigInt}, type : ${typeof bigInt}`);


// string
const char = 'c';
const brenden = 'brenden';
const greeting = 'hello ' + brenden;
console.log(`value : ${greeting}, type : ${typeof greeting}`);
// template literals (string)
const helloBob = `hi ${brenden}!`;
console.log(`value : ${helloBob}, type : ${typeof helloBob}`);


// boolen
// false : 0, null, undefined, NaN, ''
// true  : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);


// null : 명확하게 빈 값이라고 지정
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);


//undefined : 선언은 되었지만 아무 값이 지정되지 않은 값
let x;
console.log(`value : ${x}, type : ${typeof x}`);


// symbol : create unique identifiers for objects
// 우선순위를 설정하며 고유한 식별자를 사용해야할때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2); // false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2); // true
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`); // symbol의 값 표현시 .description 을 통해 string으로 변경해 출력


// object, real-life object, data structure
const ellie = { name : 'ellie', age : 20};
ellie.age = 21; // 변경가능


// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // 'h'
console.log(`value : ${text}, type : ${typeof text}`); // hello, string
text = 1;
console.log(`value : ${text}, type : ${typeof text}`); // 1, number
text = '7' + 5;
console.log(`value : ${text}, type : ${typeof text}`); // 75, string
text = '8' / '2';
console.log(`value : ${text}, type : ${typeof text}`); // 4, number
// console.log(text.charAt(0)); // TypeError 


