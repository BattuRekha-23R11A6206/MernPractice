//static = keyword
//used to define static methods or properties
//static members belong to the class itself rather than to any specific instance
//can be called without creating an instance of the class

// same as in java and python
class MathUtil {
    static pi = 3.14159; //static property  
    static square(x) { //static method
        return x * x;
    }
    static cube(x) { //static method
        return x * x * x;
    }
}

console.log(MathUtil.pi);
console.log(MathUtil.square(4));
console.log(MathUtil.cube(3));

//static members can be useful for utility functions or constants
//that don't require instance-specific data
//they can be accessed directly through the class name
//MathUtil.pi, MathUtil.square(), MathUtil.cube()
//without needing to create an instance of MathUtil
//MathUtil mathUtil = new MathUtil(); //not needed
//mathUtil.pi; //not needed
//mathUtil.square(4); //not needed
//mathUtil.cube(3); //not needed
//this helps in reducing memory usage and improves performance
//since static members are shared across all instances of the class
//static members can also be used to implement singleton patterns
//where only one instance of a class is allowed
//static members can be inherited by subclasses


