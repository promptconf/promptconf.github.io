let countdown;
const displayWrap = document.querySelector('.countdown__display');
const timerDisplay = document.querySelector('.countdown__display__time-left');

// const promptConfStart = new Date('May 22, 19 23:32:00');
const promptConfStart = new Date('September 28, 19 10:00:00');

function timer(milliseconds) {
    clearInterval(countdown)

    // const now = Date.now();
    const seconds = milliseconds * 1000;

    displayTimeLeft(seconds)
    
    countdown = setInterval(() => {
        const secondsLeft = milliseconds / 1000;
        if (secondsLeft < 0) {
            clearInterval(countdown)
            timerDisplay.textContent = 'Now!';
            return
        }
        displayTimeLeft(secondsLeft)
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

    const display = `Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds < 10 ? '0' : ''}${seconds}`

    timerDisplay.textContent = display
}


function startTimer() {
    const now = Date.now();
    const millisecondsToConf = promptConfStart - now;
    timer(millisecondsToConf);
}

window.onload = startTimer();