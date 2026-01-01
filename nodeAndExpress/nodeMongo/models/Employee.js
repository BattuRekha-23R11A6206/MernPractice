//the file we are writing in models folder is Employee.js
//key observations, in models, file should start with capital letter a
//and best practice is to have singular form of the model name
//because mongoose will create a collection in plural form
//collection in mongoose is like a table in relational databases

const mongoose = require('mongoose');

//define schema for Employee
const employeeSchema = new mongoose.Schema({// object to this method
    //name,email,phone,city
    name: {
        type: String,
        required: true //name is requiredi.e to validate data
    },
    email: {
        type: String,   
        required: true,
        unique: true //email should be unique
    },
    phone: {
        type: number,
        default: false //phone is not required
    },
    city: {
        type: String,
    }

})

module.exports = mongoose.model('Employee', employeeSchema); //exporting the model

