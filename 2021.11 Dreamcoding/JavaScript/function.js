// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body ... return }
// one function === one thing
// naming : doSomething, command, verb
// e.g. createCardAndpoint -> createCard, createPoint
// function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// primitive parameters : passed by value
// object parameters : passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name:'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from){
    console.log(`${message} by ${from}`);
}
showMessage("Hi");

// 4. Rest parameters (added in ES6)
function printAlll(...args){
    for( let i = 0; i<args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAlll('dream', 'coding', 'minju');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage  = 'hello';
    }
}
printMessage();

// scope란! 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
// 자기 자식의 변수는 보여도 자기 부모의 변수는 보이지 않는다.

//6. Return a value
function sum(a, b) {
    return a + b;   
}
const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if(user.point>10){
        //long upgrade logic...
    }
}

//good 
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function 


// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function (){
    // anonymous function
    console.log('print');
};
print();

