//closure = function that is enclosed in another function
//            has access to the outer function's variables
//            even after the outer function has returned
//            can be used to create private variables
//            can be used to create function factories
//            can be used to create function decorators
//            can be used to create modules
//            can be used to create currying functions
//            can be used to create memoization functions

// like inner class in java

function outer() {
    let count = 0; // private variable
    function inner() {
        count++;
        console.log(count);
    }
    inner(); // call inner function
}

outer(); // Output: 1
outer(); // Output: 1
outer(); // Output: 1

// a closure can maintain a state of a function or variable
// even after the outer function has returned

function outer2() {
    let count = 0;  
    function inner() {
        count++;
        console.log(count);
    }
    return inner; // return inner function
}

//============

count = 0
function increment() {
    count++;
    console.log(count);
}

// but count have global scope and no privacy

