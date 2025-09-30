// error = new Error(message);
// error.name = 'ErrorName';
// error.message = 'Error message';
// error.stack = 'Stack trace';
// throw error;

// an object that is created to represent a prblm that occurs
// occur after with user input or system failure
// can be created using the Error constructor function
// can be thrown using the throw statement
// can be caught using the try...catch statement

console.lag('Start of script');//log...., not lag right?..,yup
// because the error is not caught, the script will stop executing
// we will never reach the next line to execute
console.log("Hello");

console.log(x); // ReferenceError: x is not defined

// and more errors errors are 
//network error
//promise errors
//security errors
//syntax errors as discussed


//=============Solution==================//

// try...catch statement like in java

try{
    console.log(x);
}
catch(error){
    console.log('An error occurred: ' + error.message);
    // can also log error.name and error.stack
}
finally{
    console.log('This will always execute');
}
console.log('End of script');// this will now execute

// custom errors

function validateAge(age){
    if(age < 0){
        throw new Error('Age cannot be negative');
    }   
    if(age < 18){
        throw new Error('Age must be at least 18');
    }
    return true;
}


