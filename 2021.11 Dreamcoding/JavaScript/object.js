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
console.log(minju.name); // 코딩할때는 닷을 써서 하는 경우가 맞다
console.log(minju['name']); // 반드시 스트링타입으로 받아와야 함.  // 실시간으로 원하는 값을 받아오고 싶다면 얘를 씀
minju['hasJob'] = true;
console.log(minju.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(minju, 'name');
printValue(minju, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = makePerson('ellie', 30)
console.log(person4);

function makePerson(name, age) {
    return {
        name,
        age,
    }
}

// 가만보니 이거 클래스네!

// 4. Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 5. in operator: property existence chek (key in obj)
console.log('name' in minju);
console.log('age' in minju);
console.log('random' in minju);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in minju) {
    console.log(key);
}

// for (value of iterable)
const array = [1,2,4,5];
for(value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name:'minju', age:'20'};
const user2 = user;
user2.name = 'coder';
console.log(user); // --> user2가 가르치고 있는 ref의 minju의 이름을 코더로 바꿨음!!

// old way
const user3 = {};
for(key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user); //Obeject는 기본적으로 JavaScript에 포함되어 있음
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2});
console.log(mixed.color); // blue 가 출력됨. 값이 덮어씌워지니깐!
console.log(mixed.size); 

