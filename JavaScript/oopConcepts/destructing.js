//destructing = extracting values from arrays or properties from objects
//  and assigning them to variables
// [] = to perform array destructing
// {} = to perform object destructing
// ... = spread operator
// rest parameter = to collect multiple elements and condense them into a single element

//Array Destructing


let a = 1;
let b = 2;

[a,b] = [b,a] //swapping values of a and b
console.log(a,b); //2 1

const colors = ['red','green','blue','black','yellow'];

//[colors[0], colors[4]] = [colors[4], colors[0]] //swapping values of colors[0] and colors[4]

//console.log(colors); //['blue', 'green', 'red']

const[firstColor, secondColor, ...restOfColors] = colors; //rest parameter
console.log(firstColor); //red
console.log(secondColor); //green
console.log(restOfColors); //['blue', 'black', 'yellow']  
console.log(...restOfColors); //blue black yellow (spread operator)  

//Object Destructing

const person1 = {
    name: 'John',
    age: 30,
    city: 'New York',
    country: 'USA'
};

const person2 = {
    name: 'Jane',
    age: 25,
    city: 'Los Angeles',
}

const {name, age, ...restOfPerson} = person1; //rest parameter
console.log(name); //John
console.log(age); //30  
console.log(restOfPerson); //{city: 'New York', country: 'USA'}
console.log(...Object.values(restOfPerson)); //New York USA (spread operator)   

const {name: PersonName, age: personAge, city: personCity, country: country2 = 'Unknown'} = person2; 
//setting default value for country and if we don't set name and age to different variable names then we have to set them to different variable names

function displayPerson({name, age, city, country = 'Unknown'}) { //destructing in function parameters
    console.log(`Name: ${name}, Age: ${age}, City: ${city}, Country: ${country}`);
}

displayPerson(person1); //Name: John, Age: 30, City: New York Country: USA
displayPerson(person2); //Name: Jane, Age: 25, City: Los Angeles Country: Unknow