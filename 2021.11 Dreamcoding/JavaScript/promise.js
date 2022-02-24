'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State : pending -> fulfilled or rejected
// Producer vs Consumer 


// <Promise 만들기>
// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject)=>{
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(()=> {
        // resolve('ellie');
        reject(new Error('no network'));
    },2000)
});
//*promise를 만드는 순간 그 안의 함수가 바로 실행된다. 따라서 사용자가 버튼을 눌렀을 때 네트워크 요청을 해야하는 케이스이면, 위와 같이 작성하면 안된다. */

//<Promise 사용하기>
// 2. Consumers: then, catch, finally
promise //
.then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(()=> {
console.log('finally');

//<Promise 연결하기>
// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

fetchNumber //
.then(num => num*2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(num-1),1000);
    })
})
.then(num => console.log(num));

//<오류를 잘 처리하자>
//4. Error Handling
const getHen = () => 
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('🐔'), 1000);
    });

const getEgg = hen => 
    new Promise((resolve,reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`),1000);
    });
const cook = egg => 
    new Promise((resolve,reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`),1000);
    });

getHen()
    .then(getEgg)
    .catch(error=>{
        return '🍞'
    })
    .then(cook)
    .then(console.log);
    .catch(console.log);

// callback 지옥 -> promise로 작성하기
// 5. callback to promise

class UserStorage{
	loginUser(id, password){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ){
                    reslove(id);
                }else{
                    reject(new Error('not found'))
                }
            }, 2000)
        })
	}

	getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(user === 'ellie'){
                    resolve({name: 'ellie', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
	} 
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password)
.then(user => userStorage.getRoles)
.then(user => alert(
    `Hello ${user.name}, you have a ${user.role}role`));
.catch(console.log);
