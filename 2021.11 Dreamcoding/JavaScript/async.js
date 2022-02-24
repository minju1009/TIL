//async & await2
// clear style of using promise !

// 1. async
async function fetchUser(){
    return 'minju';
}

const user = fetchUser();
console.log(user);

// 2. await 🌟
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple() {
    await delay(3000);
    return '🍎';
}

async function getBanana() {
    await delay(3000);
    return '🍌';
}

// 사과와 바나나 모두를 따오는 함수!
function pickFruits(){
    return getApple()
    .then(apple => {
        return getBanana()
        .then(banana => `${apple} + ${banana}`)
    });
}

pickFruits().then(console.log);
// 아니 이것은 콜백지옥이다!!!
// 다음과 같이 고칠 수 있다.

async function newPickFruits(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

newPickFruits().then(console.log);

// 위와 같이 하면, 3초 3초씩 걸린다. 동시에 실행하게 하려면?

async function Fruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`
}
// 아니.. 이렇게 복잡하게 작성해야 해?????

//3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);

//4. 첫 번째, 빠른것만!!가져오려면!
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);