
function updateClock() {
    const now = new Date(); //time right now
    let hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedTime = `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)} ${ampm}`;
    document.getElementById('clock').innerText = formattedTime;
}

updateClock(); //initial call
setInterval(updateClock, 1000); //update every second