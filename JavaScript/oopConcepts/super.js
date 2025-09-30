//super = keyword refers to parent class
//access parent properties and methods
//this = this object
//super() = call parent constructor

//before using 'this' in a subclass constructor, you must call super()
//super() must be called before using 'this'
//super() calls the parent constructor
//super.method() calls a method on the parent class
//super.property = access a property on the parent class
//super can be used in static methods to call static methods on the parent class
//super can be used in instance methods to call instance methods on the parent class
//super can be used in getters and setters to access parent properties
//super can be used in derived classes to extend functionality of parent class

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name} makes a noise`);
    }   
    info() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {//eventhough the parameters are declared in parent class, they must be declared in the child class as well
        super(name, age);
        this.breed = breed;
    }
    speak() {
        super.speak();
        console.log(`${this.name} barks`);
    }
    info() {
        super.info();
        console.log(`${this.name} is a ${this.breed}`);
    }
}

const dog = new Dog('Buddy', 3, 'Golden Retriever');
dog.speak();