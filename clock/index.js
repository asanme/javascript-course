const clockText = document.getElementById("clock-container");

function updateClock() {
    let date = new Date();
    let minutes = date.getMinutes().toString();
    let hours = date.getHours().toString();
    let seconds = date.getSeconds().toString();
    clockText.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
