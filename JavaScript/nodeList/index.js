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






