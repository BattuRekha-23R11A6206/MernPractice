//function expression is diff from from function declaration
//function expression is not hoisted
//function expression can be anonymous or named

//anonymous function expression
const add = function (a, b) {
  return a + b;
};

add(2, 3); //5
console.log(add(2, 3));

//named function expression
const multiply = function multiplyNumbers(a, b) {
  return a * b;
};
multiply(2, 3); //6
console.log(multiply(2, 3));
//multiplyNumbers(2, 3); //ReferenceError: multiplyNumbers is not defined

setTimeout(function() {
    console.log("hello");
}, 3000);

//function expression can be used as an IIFE (Immediately Invoked Function Expression)

setTimeout(() => {
    console.log("hello from arrow function");
}, 3000);

(function() {
    console.log("This is an IIFE");
})();

//iife means the function will be executed immediately after its creation
// i.e it's syntax is like this (function(){})()()

// actually we did this in reduce method codes
