//constructor = function that creates an object
//in JS every object has a constructor property
//that is a reference to the function that created the object   
//most of the time the constructor property is not used
//but it can be useful in some cases    

const car1 = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'blue',
    drive: function() {`you drive the ${this.model}`;}
}

const car2 = {
    make: 'Honda',
    model: 'Civic', 
    year: 2019,
    color: 'red',
    drive: function() {`you drive the ${this.model}`;}
}

const car3 = {
    make: 'Ford',
    model: 'Mustang',   
    year: 2021,
    color: 'black',
    drive: function() {`you drive the ${this.model}`;}
}

//initializing the same object multiple times is not efficient
//we can use a constructor function to create multiple objects of the same type

function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function() {`you drive the ${this.model}`;}
}

const car4 = new Car('Toyota', 'Corolla', 2020, 'blue');
const car5 = new Car('Honda', 'Civic', 2019, 'red');
const car6 = new Car('Ford', 'Mustang', 2021, 'black');

console.log(car4);
console.log(car5);
console.log(car6);

car1.drive();
car4.drive();   
