//your JS code here. If required.
function updateTimer() {
    const now = new Date();
    const dateString = now.toLocaleString();  // Converts date and time to string using locale conventions
    document.getElementById('timer').textContent = dateString;
}

// Update the timer every second (1000 milliseconds)
setInterval(updateTimer, 1000);
