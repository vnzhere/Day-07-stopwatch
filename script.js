let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

// Get display element
const display = document.getElementById("display");

// Function to update time
function updateDisplay() {

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = `${h}:${m}:${s}`;
}

// Start timer
function startTimer() {

    if (timer !== null) return; // Prevent multiple intervals

    timer = setInterval(() => {

        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();

    }, 1000);
}

// Pause timer
function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

// Reset timer
function resetTimer() {
    pauseTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}