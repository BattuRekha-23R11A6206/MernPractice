//callback = function that is passed as an ragument
//              to another function
//              and is executed after some event or operation


// Used to handle asunchronous operations and prevent callback hell
//    1.Reading a file
//    2.Network requests
//    3.Database queries
//    4.Event handling
//    5.Timer functions

hello(wait);

function hello(callBack){
    setTimeout(function (){
        console.log("Hello!");
        callBack();
    }, 3000);
}

function leave(){
    console.log("Leaving...");
}

function wait(){
    console.log("Waiting...");
}

function goodbye(){
    console.log("Goodbye!");
}