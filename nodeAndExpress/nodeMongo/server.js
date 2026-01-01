const express = require('express');

const dotenv = require('dotenv');

//import mongodb package using mongoClient because
//  we are going to use mongoClient to connect to mongoDB
const { MongoClient } = require('mongodb');

const app = express();

const port = 5000;

console.log(process.env); //process.env contains all the environment variables 
                          //and is used to access the environment variable

//to establish connection with .env file we need to configure dotenv
dotenv.config();

//connect to mongoDB database using mongoClient

//if connection is successful then print connected to database using a promise
//promise is used to handle asynchronous operations in JavaScript

MongoClient.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to Database");
    })
    .catch(error => console.error(error));

app.listen(port, () => { // listen method to start the server means it will listen to the requests on specified port
    console.log(`Server is running on http://localhost:${port}`);
});

//lets connect to mongoDB database
//to connect to mongoDB we need mongoose package
//so let's import mongoose

//const mongoose = require('mongoose');