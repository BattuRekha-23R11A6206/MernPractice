//setTimeOut = is a method that executes a function after a
//  specified number of milliseconds
// times are approximately accurate, but not guaranteed
// syntax = setTimeout(function, milliseconds, param1, param2, ...)


//clearTimeout = is a method that clears a timer set with setTimeout()
// syntax = clearTimeout(timeoutID) 


function greet(name) {
  console.log("Hello " + name);
}

setTimeout(greet, 3000, "John"); // waits 3 seconds then calls greet function

console.log("This message is shown first");

//anononymous function

setTimeout(function () {
  console.log("This message is shown after 2 seconds");
}, 2000);

//clearing a timeout

let timeoutID = setTimeout(function () {
  console.log("This message will not be shown");
}, 4000);

clearTimeout(timeoutID); // cancels the timeout 
console.log("Timeout cleared, message will not be shown");
// The message from the timeout will not be shown
// because clearTimeout was called before the timeout completed

