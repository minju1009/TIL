// 자료구조 : 토끼들 당근들별로 바구니에 분류해서 담아놓는 것. 
// object와 자료구조의 차이점은? 
// object는 귀 두개, 먹는다, 뛴다 등 서로 연관된 특징과 행동을 묶어놓는 것을 말하고,
// 자료구조는 비슷한 타입의 오브젝트 들, 즉 토끼들을 묶어놓는 것이다.

// Since JavaScript === dynamically typed language, 한 바구니에 다양한 타입들을 담아놓을 수도 있다.

'use strict';

//1. Array🍕
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

// 3. Looping over an array
// print all fruits!

// a. for
for (let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of 
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, delection, copy
// push : add an item to the end
fruits.push('🍓', '🍑');  
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍓', '🍑');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note **!! shift, unshift are slower than pop, push

// splice: remove an item by index position

fruits.push('🍓', '🍋', '🍇');
console.log(fruits);

fruits.splice(1);
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🍉'];
const newFruit = fruits.concat(fruits2);
console.log(newFruit);

// 5. Searching
// find the index
console.clear();
console.log(fruits);

// indexOF
console.log(fruits.indexOf('🍉')); // 배열 안에 없으면 -1이 출력됨

// includes
console.log(fruits.includes('🍉')); // True or False 출력됨

// lastIndexOf
console.clear();
fruits.push('🍑');
console.log(fruits);
console.log(fruits.indexOf('🍑'));
console.log(fruits.lastIndexOf('🍑'));
  