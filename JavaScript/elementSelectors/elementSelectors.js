//element selector = Methods used to target and manipulate HTML elements
                    //They allow to select one or multiple HTML elements
                    //from the DOM(Document Object Model)

                    //1. document.getElementById() //return element or null
                    //2. document.getElementByClassName()  // HTML collection
                    //3. document.getElementByTagName()    //HTML collection
                    //4. docment.querySelector()           //returns first ele or null
                    //5. document.querySelectorAll()       //NODELIST

const myHeading = document.getElementById("my-heading");//return element or null if it don't finds
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

const fruits = document.getElementsByClassName("fruits");

console.log(fruits);

fruits[2].style.backgroundColor = "yellow"

