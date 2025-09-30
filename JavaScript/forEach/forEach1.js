//forEach() = Executes a provided function(callback) once for each array element.
// i.e used to iterate over the elements of an array. 

// forEach provides three arguments to the callback function:
// 1. currentValue: The current element being processed in the array.
// 2. index (optional): The index of the current element being processed in the array.
// 3. array (optional): The array that forEach() is being applied to.


let arr = [10, 20, 30, 40, 50];

arr.forEach(display1);
arr.forEach(display2);

function display1(element){ // the element parameter is provided by forEach method
    console.log(element);
}

function display2(element, index, array){ // the element and index parameters are provided by forEach method
    array[index] = element + 5; // adding 5 to each element of the array
    console.log(array[index]);
}