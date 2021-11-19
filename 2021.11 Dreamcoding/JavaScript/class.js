// class
// - template
// - declare once
// - no data in
//////붕어빵 


// object
// -instance of a class
// -created many timees
// -data in
//////팥붕어빵, 크림붕어빵,등 등 

'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - intruduced in ES6
// -syntatical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // methods 
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const minju = new Person("minju", 30);
console.log(minju.name);
console.log(minju.age);
minju.speak();

// 2. Getter and setters
// 자판기에 -1이 뽑히면 안되지!

class User {
    constructor (firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }

}

const user1 = new User("steve", "Jobs", -1);
console.log(user1.age);

// 3. Fields(public, private)
// Too soon!

class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
}

// 5. Inheritance
// a way for one class to extend another class.
// ***상속 & 다양성 ***

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }

}

class Rectangle extends Shape {}
class Triangle extends Shape {

    draw() {
        super.draw(); // 부모꺼 사용 가능
        console.log('triangle!!icon'); // 새로쓰기 가능
    }
    
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,20,'red');
console.log(triangle.getArea());

