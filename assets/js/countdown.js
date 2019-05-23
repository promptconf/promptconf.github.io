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

function displayTimeLeft(seconds) {
    const days = Math.floor(seconds / 86400);

    const remainderHours = seconds % 86400;
    const hours = Math.floor(remainderHours / 3600)

    const remainderMinutes = remainderHours % 3600;
    const minutes = Math.floor(remainderMinutes / 60);

    const remainderSeconds = remainderMinutes % 60
    const display = `Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`

    timerDisplay.textContent = display
}


function startTimer() {
    
    console.log('conf date: ', promptConfStart);
    const now = Date.now();
    console.log('now: ', now)

    const milliseconds = promptConfStart - now;
    console.log('milliseconds: ', milliseconds)
    timer(milliseconds)
}

window.onload = startTimer();