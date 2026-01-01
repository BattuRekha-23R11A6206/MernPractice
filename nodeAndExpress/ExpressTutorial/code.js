//npm init is used to create a package.json file for your project
//This file contains metadata about your project and its dependencies
//To create a package.json file, run the following command in your terminal:
// npm init -y which will create a default package.json file rather than prompting you for information

//After creating the package.json file, you can install Express.js by running:
// npm install express

//nodemon is a tool that helps develop Node.js applications by automatically restarting the server when file changes in the directory are detected
//To install nodemon globally, run the following command:
// npm install -g nodemon but here we did npm i nodemon as a dev dependency

//console.log("Hello, Rekha!");



//==============Servers=====================    

//Using Express.js to create a simple server and can show a response on the browser using routes
const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => { //creating  a route for the root URL using app.get() method and taking input as a callback 
//                            function with request and response objects which is coming from the client
    res.send('Apple is red in color');//sending a response back to the client using res.send() method
});

//to start a server and listen on a specific port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} successfully`);
});