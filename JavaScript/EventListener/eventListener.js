
//eventListener = a method that attaches an event handler to the specified element
//                can attach one or multiple events to the same element
//                can add more than one event listener to the same element
//                can add event listener to the document object
//                can add event listener to the window object
//                can add event listener to the body object
//                can add event listener to the html object
//                can add event listener to the document object
//                can add event listener to the window object
//                can add event listener to the body object

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

/*function changeColor(event) {
    myBox.style.backgroundColor = "lightblue";
    myBox.textContent = "OUCH ";
}*/

//myBox.addEventListener("click" , changeColor); // we don't need to changecolor(event) with the callback.., it is 
                                                //it is provided by the eventListener
                

//same as above but with a callback function with less drama and using arrow function

myBox.addEventListener("click", event => {
    myBox.style.backgroud = "tomato";
    myBox.textContent = "OUCH";
});

myBox.addEventListener("mouseOver", event => {
    myBox.style.backgroud = "yellow";
    myBox.textContent = "Don't do it";
});

myBox.addEventListener("mouseout", event => {
    myBox.style.backgroud = "lightgreen";
    myBox.textContent = "click me";
});