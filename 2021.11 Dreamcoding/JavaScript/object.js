// Objects
// one of the JavaScript's data types
// a collection of related data and/or functionality.
// nearly all objects in JavaScript are instances of Object
// object = {key : value}; 의 집합체이다.

// 1. literals and properties

const name = 'minju';
const age = 4;
print(name, age);
function print(name, age) {
    console.log(name);
    console.log(age);
}

// 이를 개선하고자 오브젝트를 사용

const minju = {name: 'minju', age:4};
print(minju);

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax


// with JavaScript magic (dynamically typed language)
// can add properties later
minju.hasJob = true;
console.log(minju);

//can delete properties later
delete minju.hasJob;
console.log(minju.hasJob);

// 2. Computed properties
console.log(minju.name);
console.log(minju['name']); // 반드시 스트링타입으로 받아와야 함.

