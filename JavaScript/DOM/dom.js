//DOM = Documnet Object Model
//Object{} that represents the page you see in the web browser
//and provides you with an API to interact with it.
//web browser constructs the elements in a tree like representation
//and structures all the DOM to dynamically 
//change the content, structure, and style of a web page

const username = "Rekha";

const welcomeMsg = document.getElementById("welcome.msg");

welcomeMsg.textContent += username === "" ? "Guest" : username;
