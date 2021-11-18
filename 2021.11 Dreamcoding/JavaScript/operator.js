// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals 1+2 = ${1+2}`);

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //subtract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; //3이 출력됨
// counter = counter + 1;
// preIncrement = counter;
console.log(preIncrement);
const postIncrement = counter++;
console.log(postIncrement);
// postIncrement = counter;
// counter = counter + 1;
const preDecrement = --counter;
console.log(preDecrement);
const postDecrement = counter--;
console.log(postDecrement);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x+y
x -= y; // x = x-y
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators : || (or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the first falsy value
// nullableObject && nullableObject.something

//! (not)
console.log(!value1);   


console.log(`and: ${value1 && value2 && check()}`);



function check() {
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('😩');
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// ==loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// ===strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference

const minju1 = {name:"minju"};
const minju2 = {name:"minju"};
const minju3 = minju1;
console.log(minju1 == minju2);
console.log(minju1 === minju2);
console.log(minju1 === minju3);

// equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' ===false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false

// 8.Conditional operators: if
// if, else if, else
const name = "minju";
if(name === "minju"){
    console.log("Welcome, Minju!");
} else if (name === "coder") {
    console.log("You are an amazing coder");
} else {
    console.log("unknown");
}

// 9. Ternary operator: ?
// condition ? value1 : value 2;
console.log( name === "minju" ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum0like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE' :
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log("love you!");
        break;
    default:
        console.log("same all!");
        break;
}

// 11. Loops
// while loop, while the condition is truth,
// body code is executed.

let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}


// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i=i-2) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i=i-2){
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops 
for (let i = 0; i<10 ; i++) {
    for(let j = 0; j<10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(i = 0; i < 11; i++){
    if(i%2 === 0 && i !== 0){
        console.log(i);
    }
    else{
        continue;
    }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for ( i = 0; i < 11; i++){
    if(i<9){
        console.log(i)
    }
    else{
        break;
    }
}







