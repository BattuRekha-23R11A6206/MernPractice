const employee = require('../models/employeeModel');

//we can create controller functions for CRUD operations in controller folder

//create and save new employeeModel

const createEmployee = async (req, res) => {
    try {
        const { name, email, phone, city } = req.body;

        const newEmployee = new employee({//creating new instance of employee model
            name,
            email,
            phone,
            city
        });
        await newEmployee.save();//saving the new employee to database