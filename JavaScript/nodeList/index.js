// NodeList = static collection of HTML elements by (id, class, element)
//            can be created by using querySelectorAll()
//            similar to an array but no (map, filter, reduce) methods
//            NodeList won't update automatically to reflect changes


let buttons = document.querySelector(".myButtons")

//ADD html/css properties

/*buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.background = "hs1(205,100%,40%)" ;
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.background = "hs1(205,100%,60%)" ;
    });
});*/



/* ====================================================================================================================
//Appending an element requires 3 steps

const newButton = document.createElement("button"); //step 1
newButton.textContent = "Button 5"; //step 2
newButton.classList = "myButtons"; //when working with element's class, we work with classList not class
                                   //the class is myButtons
document.body.appendChild(newButton); //step 3

console.log(buttons); 

// above we appended a button but you can't see it in console eventhough you can see it in 
//output because nodeLists are a static collection, they won't update automatically
//to reflect changes to DOM eventhough button 5 is within the DOM, we need to manually add it
//if we want to work with it to do that we can use selectQueryAll()

buttons = document.querySelectorAll("myButtons");// now you can see it in console

console.log(buttons);

=======================================================================================================================*/



//==========🧐🧐🧐🧐🧐GOT CONFUSED BETWEEN NODELIST AND CLASSLIST==================================================


// so.., here you go about nodeList and theory about classList is in classList folder

/*

🔍 NodeList vs classList - They're NOT Related!
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

*/






