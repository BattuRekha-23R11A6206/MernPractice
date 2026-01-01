//middlewares = functions that have access to the request object (req),
//the response object (res), and the next middleware function in the application’s request-response cycle.
//The next middleware function is commonly denoted by a variable named next.    
//Middleware functions can perform the following tasks:
//Execute any code.
//Make changes to the request and the response objects.
//End the request-response cycle.
//Call the next middleware function in the stack.

//middleware have 3 parameters req, res, next

//==============Middlewares=====================    

const express = require('express');
const app = express();
const PORT = 3000;

/*app.use((req, res, next) => { //using app.use() method to mount the middleware function
    if(10 < 20){
        console.log("Middleware 1 executed");
        next(); //calling next() to pass control to the next middleware function
    }
});*/

//let's pass this middleware to a variable

const firstHandler = ((req, res, next) => { //we should not use app.use method
    if(10 > 20){ //since condition is false this middleware will not be executed 
        next(); //calling next() to pass control to the next middleware function
    }
})

const secondHandler = ((req, res, next) => {
    if(10 < 20){
        next(); //calling next() to pass control to the next middleware function
    }else{
        console.log("Condition is false, so response is sent from secondHandler middleware");
    }
})

const thirdHandler = ((req, res, next) => {
    if(10 < 20){
        next();
    }   
})






app.get(`/home`, firstHandler, (req,res) => {
    res.send("Welcome to the Home Page");
});

app.get(`/about`, secondHandler, (req,res) => {
    res.send("Welcome to the About Page");
});

app.get(`/user/:id`, thirdHandler, (req,res) => {
    res.send("Welcome to the User Page");
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} successfully`);
});
