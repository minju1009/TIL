//JSON
//JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit ={
    name: 'tori',
    color : 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    }
}
json = JSON.stringify(rabbit);
console.log(json);

// 함수와 symbol은 포함되지 않음

// 조금 더 통제하고 싶다면!! 콜백 함수를 사용!

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key:${key}, value:${value}`);
    return key === 'name'? 'ellie' : value;;
});
console.log(json);
// 토끼의 object를 싸고 있는 제일 최상위 꺼가 전달된다.


// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json, (key, value) => {
    return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj);
console.log(obj.birthDate.getDate());