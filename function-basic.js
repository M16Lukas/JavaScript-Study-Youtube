'use strict';

// 함수 선언
function doSomething(add) {
  console.log(add);
  const result = add(1,2);
  console.log(result);
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출
doSomething(add);

const addFun = add;
console.log(addFun);
addFun(3, 4);
