// Set the end date and time for the countdown
const endDate = new Date("Nov 01, 2024 18:09:00").getTime();
const startDate = new Date().getTime();  // The time at which the countdown started

// Function to update the countdown timer and progress bar
function updateTimer() {
    const now = new Date().getTime();
    const distance = endDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML elements with calculated values
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Calculate the percentage of time elapsed for the progress bar
    const totalTime = endDate - startDate;
    const timeElapsed = now - startDate;
    const percentage = (timeElapsed / totalTime) * 100;
    document.getElementById("progress-bar").style.width = Math.min(percentage, 100) + "%";

    // If the countdown is over, stop the timer and display "EXPIRED"
    if (distance <= 0) {
        clearInterval(timerInterval);
        document.querySelector(".container").innerHTML = "<h1>EXPIRED</h1>";
        document.getElementById("progress-bar").style.width = "100%";
    }
}

// Update the timer every second
const timerInterval = setInterval(updateTimer, 1000);
