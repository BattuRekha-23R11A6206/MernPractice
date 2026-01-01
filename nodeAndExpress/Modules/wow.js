/*  when you import a module using require(), all the code
 in that module is executed immediately, regardless of whether
  you assign the exported values to a variable or not.*/


const num1 = 5;
const num2 = 10;

function addValues() {
    console.log(`the sum is: ${num1 + num2}`);
}

// This function call WILL execute when the module is required
addValues();