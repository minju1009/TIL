//1. Use strict
//JavaScript is very flexible
//flexible === dangerous
//added ECMAScript 5
'use strict';

console.log('Hello World!');


// 2. Variable, rw(read/write)
// let
// can be used with block scope

{
    let name = 'minju';
    console.log(name);
    name='hello';
    console.log(name);
}

console.log(name);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope

// 3. Constant r(read only)

// Note!
// Immutable data types : primitive types, frozen objects
// Mubatle data types: all objects by default are mutable in JS

// favor immutable data type. always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item : number, string, boolean, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1  // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size} type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NoN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2 ;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 1231248998797129381231983987232123123987n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3<1;

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// object 
const minju = { name: "minju", age:31};
console.log(minju);
minju.age = 25;
console.log(minju);

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 75, string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // 4, number
text = '7' + '5';
console.log(`value: ${text}, type: ${typeof text}`);


