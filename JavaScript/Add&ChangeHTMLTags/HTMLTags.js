//............Example 1 <h1>.........//

//step 1 create the element
const newH1 = document.createElement("h1");

//step2 add attributes/properties
newH1.textContent = "Hello World";
newH1.id = "myH1";
newH1.style.color = "tomoato";
newH1.style.textAlign = "center";

//step3 add the element to the DOM
//document.body.appendChild(newH1);
document.body.prepend(newH1); // prepend adds the element to the beginning of the body
document.getElementById("box1").appendChild(newH1); // append adds the element to the end of the body
document.body.insertBefore(newH1, document.getElementById("box2")); // insertBefore adds the element to the beginning of the body
//remove with element
document.body.removeChild(newH1);

//............Example 2 <p>.........//

//step 1 create the element
const newP = document.createElement("p");
//step2 add attributes/properties
newP.textContent = "Hello World";
//step3 add the element to the DOM
document.body.appendChild(newP);

//what if they don't have id?

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newP, boxes[0]);// can make box[1] or box[2] or box[3] to add the paragraph to the second, third, or fourth box
