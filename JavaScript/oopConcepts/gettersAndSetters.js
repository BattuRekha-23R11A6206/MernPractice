//getter = a special method that gets the value of a specific property i.e it makes a property readable
//setter = a special method that sets the value of a specific property i.e it makes a property writable

//validate and modify a value when reading/writing a property
//useful when working with private properties
//these are not methods, they are accessors

//it helps with validation when creating an object or updating one of its properties

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() { //getter
        return this.calcArea();
    }       
    calcArea() {
        return this.width * this.height;
    }
    set width(value) { //setter
        if (value <= 0) {
            throw new Error('Width must be a positive number');
        }
        this._width = value; //use a different name for the property to avoid infinite loop
        //using _width is a common convention to indicate it's a private property and should not be accessed directly
        //this width is different from the width in the constructor
    }
    get width() { //getter for width
        return this._width;
    }
    set height(value) { //setter
        if (value <= 0) {
            throw new Error('Height must be a positive number');
        }
        this._height = value; //use a different name for the property to avoid infinite loop
    }
    get height() { //getter for height
        return this._height;
    }
}