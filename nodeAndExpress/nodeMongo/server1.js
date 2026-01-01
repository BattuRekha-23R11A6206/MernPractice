const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000; // process.env.PORT for cloud deployment 
//                                       and process.env is a global variable in Node.js

//dotenv config is used to load environment variables from a .env file into process.env
dotEnv.config()

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});