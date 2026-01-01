//callList = Element property in javaScript used to interact
//           with an element's list of classes (CSS Classes)
//           Allows you to make reusable classes for many elements
//           across your webpage

// add()
// remove()
// toggle() .. removes if present, add if not
// replace() .. (oldClass, newClass)
// contains()

const myH1 = document.getElementById("myH1");
const myButton = document.getElementById("myButton");

//myButton.classList.add("enabled"); //enabled in "" is class in html, can be viewed by inspect in chrome

//myButton.classList.remove("enabled");

/*myButton.addEventListener("mouseover" , event => {
    event.target.classList.add("hover");
});

myButton.addEventListener("mouseout" , event => {
    event.target.classList.remove("hover");
});*/

//Above use toggle instead of add and remove in both places

myH1.classList.add("enabled");
myButton.classList.add("enabled");

myButton.addEventListener("click", event => {

    if(event.target.classList.contains("disabled")){
        event.target.textContent += ":)";
    }else{
        event.target.classList.replace("enabled", "disabled");
    }

    event.target.classList.replace("enabled", "disabled");
});


myH1.addEventListener("click", event => {

    if(event.target.classList.contains("disabled")){
        event.target.textContent += ":)";
    }else{
        event.target.classList.replace("enabled", "disabled");
    }
    event.target.classList.replace("enabled", "disabled");
});



/* ====================================================================================================================

//===CONFUSION ABOUT CLASSLIST AND NODELIST=================================================================================


/*

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

🎯 Side-by-Side Comparison
Feature	                NodeList	                        classList

What it is	            Collection of elements	            Class manipulation tool
How you get it	        querySelectorAll()	                element.classList
Purpose	                Work with multiple elements	        Style one element
Example	                document.querySelectorAll('p')	    div.classList.add('active')
Analogy	                Cast list	                        Makeup kit

🧩 Practice Exercises
Exercise 1: NodeList Practice

// Get ALL buttons on page
const allButtons = document.querySelectorAll('button');
console.log(`Found ${allButtons.length} buttons`);

// Make all buttons red using NodeList
allButtons.forEach(button => {
    button.style.backgroundColor = 'red';
});

Exercise 2: classList Practice

// Get ONE specific element
const specialDiv = document.getElementById('special');

// Use classList to change its appearance
specialDiv.classList.add('important');    // Add class
specialDiv.classList.remove('old-style'); // Remove class
specialDiv.classList.toggle('visible');   // Toggle class

// Check what classes it has
if (specialDiv.classList.contains('important')) {
    console.log('This element is important!');
}

Exercise 3: Combined Usage

// Get multiple elements (NodeList)
const menuItems = document.querySelectorAll('.menu-item');

// Use classList on each one
menuItems.forEach(item => {
    // Add hover effect class
    item.classList.add('hover-effect');
    
    // Click to toggle active state
    item.addEventListener('click', () => {
        // Remove active from all items first
        menuItems.forEach(i => i.classList.remove('active'));
        // Add active to clicked item
        item.classList.add('active');
    });
});

❓ Common Confusion Points
"When do I use which?"
Use NodeList when you need to work with multiple elements

Use classList when you need to change styles/classes of one element

"Why can't I do classList on NodeList?"

// ❌ WRONG - NodeList doesn't have classList
document.querySelectorAll('.btn').classList.add('active');

// ✅ CORRECT - Apply to each element
document.querySelectorAll('.btn').forEach(btn => {
    btn.classList.add('active');  // classList on ELEMENT
});

🚀 Quick Self-Check
NodeList:

✅ Comes from querySelectorAll()

✅ Contains multiple elements

✅ Has .length, .forEach()

❌ Does NOT have .add(), .remove()

classList:

✅ Comes from element.classList

✅ Works on ONE element

✅ Has .add(), .remove(), .toggle()

❌ Does NOT have .length (it's not a collection)


*/
