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

