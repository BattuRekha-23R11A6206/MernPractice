//sort() = used to sort the elements of an array in place and return the sorted array.
// By default, the sort() method sorts the elements as strings in alphabetical and ascending order.
// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

const points = [40, 100, 1, 5, 25, 10];
points.sort();
console.log(points); // [ 1, 10, 100, 25, 40, 5 ] (wrong way)       

//solution = provide a compare function
points.sort(function(a, b){return a - b}); // a-b means 1 then 5, 5 then 10....
console.log(points); // [ 1, 5, 10, 25, 40, 100 ] (correct way)

points.sort(function(a, b){return b - a});

console.log(points); // [ 100, 40, 25, 10, 5, 1 ] (descending order)

// Example: Sort an array of objects based on a property (age)
const people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];  

people.sort((a, b) => a.age - b.age); // Sort by age in ascending order
console.log(people);
// Output: [ { name: 'Alice', age: 25 }, { name: 'John', age: 30 }, { name: 'Bob', age: 35 } ]  
people.sort((a, b) => b.age - a.age); // Sort by age in descending order
console.log(people);
// Output: [ { name: 'Bob', age: 35 }, { name: 'John', age: 30 }, { name: 'Alice', age: 25 } ]


//but not recommended to use sort() on array of objects as it changes the original array

// not recommended if array is large as it is not a stable sort then we can apply fishers yates algorithm

// ===============================