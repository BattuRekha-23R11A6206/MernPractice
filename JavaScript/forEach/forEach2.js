let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

fruits.forEach(show); // calling the forEach method on the fruits array 

function show(element, index){ // the element, index and array parameters are provided by forEach method
    console.log(`Element: ${element}, Index: ${index}`);
}

function upperCase(element, index, array){
    array[index] = element.toUpperCase();   // converting each element of the array to uppercase        
    console.log(array[index]);
}

fruits.forEach(upperCase); // calling the forEach method on the fruits array