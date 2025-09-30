const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;//.value is accessing display's value 
}

function clearDisplay(){
    display.value = '';
}

function calculateResult(operator) {
    if (operator) {
        display.value += operator;
    } else {
        try {
            display.value = eval(display.value);//eval takes expression like 3+3-4..
        } catch (error) {
            display.value = 'Error';
        }
    }
}
