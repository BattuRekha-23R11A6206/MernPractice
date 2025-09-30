// this = it refers to the object that is executing the current function
// it is not static, it can change depending on how the function is called  
// in an object method, this refers to the object

// in a regular function, this refers to the global object (window in browsers)
// in strict mode, this is undefined in a regular function
// in an event, this refers to the element that received the event
// arrow functions do not have their own this, they inherit this from the parent scope
// in a class constructor, this refers to the instance of the class 

const person1 = {
    firstName: "John",
    favFood: "pizza",
    sayHello: function() {console.log("Hello " + this.firstName + " " + this.lastName);},
    eat: function() {console.log(this.firstName + " loves to eat " + this.favFood);}
};

const person2 = {
    firstName: "Jane",
    favFood: "Burgers",
    sayHello: function() {console.log("Hello " + this.firstName + " " + this.lastName);},
    eat: function() {console.log(this.firstName + " loves to eat " + this.favFood);}
};

person1.eat(); // John loves to eat pizza
person2.eat(); // John loves to eat pizza

console.log(this); // in a browser, this refers to the window object and {} in terminal

function myFunction() {
    console.log(this); // in a browser, this refers to the window object and undefined in terminal (strict mode)
}

myFunction();

//arrow function dont have  their own this
const myArrowFunction = () => {
    console.log(this); // in a browser, this refers to the window object and {} in terminal
}

const person = {
  name: "John",
  
  // Regular function - this refers to the person object
  regularFunction: function() {
    console.log(this.name); // "John"
  },
  
  // Arrow function - this refers to the parent scope (window/global)
  arrowFunction: () => {
    console.log(this.name); // undefined (or window.name)
  }
};

person.regularFunction(); // "John"
person.arrowFunction();   // undefined
