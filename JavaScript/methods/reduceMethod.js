// reduce() = Executes a reducer function (that you provide) on each element of the array,
//  resulting in a single output value.

// i.e reduce the elements of an array to a single value

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator

console.log(sum); // 15

// Example 2: Finding the maximum value in an array
const max = numbers.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
}, -Infinity); // -Infinity is the initial value of the accumulator to ensure any number is larger

//see above..., in js.., the entire function can be passed as an argument to another function
// which is legal in js and is called a callback function

console.log(max); // 5
// Example 3: Flattening an array of arrays
const nestedArrays = [[1, 2], [3, 4], [5]];         
const flattened = nestedArrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);    
}, []); // [] is the initial value of the accumulator

console.log(flattened); // [ 1, 2, 3, 4, 5 ]

//accumulator is the accumulated value previously returned in the last invocation of the callback,
// or initialValue, if supplied (see below).
// currentValue is the current element being processed in the array.
// initialValue is a value to use as the first argument to the first call of the callback.
// If no initialValue is supplied, the first element in the array will be used and skipped.
// Calling reduce() on an empty array without an initialValue will throw a TypeError.
// Calling reduce() on an array with one element and no initialValue will return that element.
// The reduce() method executes the callback function once for each element present in the array,
//  taking four arguments:
// 1. accumulator
// 2. currentValue
// 3. currentIndex
// 4. array

// Note: reduce() does not execute the function for empty array elements.