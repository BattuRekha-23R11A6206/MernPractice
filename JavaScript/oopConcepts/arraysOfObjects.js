
const fruits = [
    { name: 'Apple', color: 'Red', quantity: 10 },
    { name: 'Banana', color: 'Yellow', quantity: 5 },
    { name: 'Grapes', color: 'Purple', quantity: 15 },
];

console.log(fruits[0].name); // Apple

// Loop through the array of objects

fruits.forEach(fruit => {
    console.log(`${fruit.name} is ${fruit.color} and we have ${fruit.quantity}`);
});

console.log(`${person1.name} lives at ${person1.address.street}, ${person1.address.city}, ${person1.address.zip}`);

// u can use reduce,filter ,map etc on arrays of objects

// Example: Get total quantity of fruits
const totalQuantity = fruits.reduce((total, fruit) => total + fruit.quantity, 0);
console.log(`Total quantity of fruits: ${totalQuantity}`); // Total quantity of fruits: 30
console.log(`${person1.name} lives at ${person1.address.street}, ${person1.address.city}, ${person1.address.zip}`);

// Example: Filter fruits with quantity greater than 10
const filteredFruits = fruits.filter(fruit => fruit.quantity > 10);
console.log('Fruits with quantity greater than 10:', filteredFruits);
// Example: Get an array of fruit names
const fruitNames = fruits.map(fruit => fruit.name);
console.log('Fruit names:', fruitNames);
// Output: Fruit names: [ 'Apple', 'Banana', 'Grapes' ]

