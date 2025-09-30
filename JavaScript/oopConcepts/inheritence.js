//inheritance = a way for one class to extend another class
//the child class inherits properties and methods from the parent class
//this allows for code reuse and the creation of hierarchical relationships between classes
//inheritance is a fundamental concept in object-oriented programming (OOP)

//same as in java and python    
class Animal { //parent class
    constructor(name) {
        this.name = name;
    }   
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal { //child class
    constructor(name, breed) {
        super(name); //call the parent class constructor        
        this.breed = breed;
    }
    speak() { //override the parent class method
        console.log(`${this.name} barks.`);
    }
    fetch() { //child class method
        console.log(`${this.name} is fetching!`);
    }
}

const animal = new Animal('Generic Animal');
animal.speak(); //Generic Animal makes a noise.