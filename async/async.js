// async & await
// clear style of using promise.

// 1. async
async function fetchUser() {
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return 'apple';
}

async function getBanana() {
  await delay(1000);
  return 'banana';
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


// 3. Useful Promise APIs
// all() : 병렬 처리
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

// race() : 가장 먼저 return 된 값을 return 
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);