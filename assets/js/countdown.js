let countdown;
const timerDisplay = document.querySelector('.countdown__time-left');

const promptConfStart = new Date('September 28, 2019 10:00:00 GMT-05:00');

function timer(milliseconds) {
    clearInterval(countdown)

    let seconds = milliseconds / 1000;

    displayTimeLeft(seconds)
    
    countdown = setInterval(() => {
        if (seconds < 0) {
            clearInterval(countdown)
            timerDisplay.textContent = 'Now!';
            return
        }
        seconds--
        displayTimeLeft(seconds)
    }, 1000)
}

function displayTimeLeft(timeLeft) {
    const days = Math.floor(timeLeft / 86400);
    const remainderOfDays = timeLeft % 86400;

    const hours = Math.floor(remainderOfDays / 3600)
    const remainderOfHours = remainderOfDays % 3600;

    const minutes = Math.floor(remainderOfHours / 60);
    const remainderOfMinutes = remainderOfHours % 60;

    const seconds = Math.floor(remainderOfMinutes);

    const display = `Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`

    timerDisplay.textContent = display
}


function startTimer() {
    const now = Date.now();
    const millisecondsToConf = promptConfStart - now;
    timer(millisecondsToConf);
}

window.onload = startTimer();