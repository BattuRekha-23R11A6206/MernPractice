const display = document.querySelector('#display');
let timer = null;
let startTime = null;
let elapsedTime = 0;//elapsedTime means the time that has passed
let isRunning = false;

function start(){
    if(isRunning) return;
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
}

function stop(){
    if(!isRunning) return;
    isRunning = false;
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
}

function reset(){
    isRunning = false;
    clearInterval(timer);
    startTime = null;
    elapsedTime = 0;
    display.textContent = '0:0:0:0';
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

document.querySelector('#startBtn').addEventListener('click', start);
document.querySelector('#stopBtn').addEventListener('click', stop);
document.querySelector('#resetBtn').addEventListener('click', reset);

// Initialize display
display.textContent = '0:0:0:0';
