/*🔍 NodeList vs classList - They're NOT Related!
NodeList = A COLLECTION of Elements
javascript
// When you use querySelectorAll, you get a NodeList
const allParagraphs = document.querySelectorAll('p'); 
// NodeList = [p, p, p, p] - Multiple elements

// Think: NodeList = "List of puppets"
classList = PROPERTIES of ONE Element
javascript
// When you work with ONE element's classes
const singleElement = document.getElementById('myElement');
singleElement.classList; 
// classList = Properties to control THIS puppet's costumes

// Think: classList = "Costume changing tools for one puppet"
🎭 Let's Visualize This
Real World Analogy:
NodeList = Casting list for a play ["Actor1", "Actor2", "Actor3"]

classList = Makeup & costume kit for ONE actor

📚 Detailed Breakdown
1. NodeList (Collection of Elements)
What it is: A list/array of DOM elements
When you get it: querySelectorAll(), childNodes, etc.

javascript
// Getting a NodeList
const buttons = document.querySelectorAll('.btn');
// buttons = NodeList [button.btn, button.btn, button.btn]

console.log(buttons.length); // 3 - How many elements
console.log(buttons[0]);     // First button element
console.log(buttons[1]);     // Second button element

// Working with NodeList
buttons.forEach(button => {
    console.log(button.textContent);
});

// NodeList methods:
buttons.length;      // Number of elements
buttons.forEach();   // Loop through elements  
buttons.item(0);     // Get specific element
2. classList (Class Manipulation for ONE Element)
What it is: An object with methods to control CSS classes of ONE element
When you get it: element.classList

javascript
// HTML: <div id="myBox" class="box red active"></div>
const box = document.getElementById('myBox');

// classList gives you methods to work with THIS element's classes
box.classList.add('new-class');        // Add a costume
box.classList.remove('red');           // Remove a costume  
box.classList.toggle('active');        // Toggle costume on/off
box.classList.contains('box');         // Check if wearing costume
box.classList.replace('red', 'blue');  // Swap costumes

// Result: <div id="myBox" class="box active new-class blue"></div>
🎯 Side-by-Side Comparison
Feature	NodeList	classList
What it is	Collection of elements	Class manipulation tool
How you get it	querySelectorAll()	element.classList
Purpose	Work with multiple elements	Style one element
Example	document.querySelectorAll('p')	div.classList.add('active')
Analogy	Cast list	Makeup kit */