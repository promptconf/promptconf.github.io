let countdown;
const timerDay = document.querySelector('.countdown__item--days .countdown__value');
const timerHours = document.querySelector('.countdown__item--hours .countdown__value');
const timerMinutes = document.querySelector('.countdown__item--minutes .countdown__value');
const timerSeconds = document.querySelector('.countdown__item--seconds .countdown__value');

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

    timerDay.textContent = days
    timerHours.textContent = hours
    timerMinutes.textContent = minutes
    timerSeconds.textContent = `${seconds < 10 ? '0' : ''}${seconds}`
}


function startTimer() {
    const now = Date.now();
    const millisecondsToConf = promptConfStart - now;
    timer(millisecondsToConf);
}

window.onload = startTimer();