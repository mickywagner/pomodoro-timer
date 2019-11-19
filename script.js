let countdown;
let display = document.querySelector('.time')
let timerBtns = document.querySelectorAll('[data-time]')
let currentTimer;
let lastTimer;

function timer(seconds) {
    currentTimer = seconds
    clearInterval(countdown)
    const now = Date.now()
    const then = now + seconds * 1000
    displayTimeLeft(seconds)
    
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft)
    }, 1000)
    
} 

function displayTimeLeft(seconds) {
    let minutes = Math.floor(seconds / 60)
    let remainderSeconds = seconds % 60
    let time = `${minutes < 10 ? '0' : ''}${minutes} : ${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`

    display.textContent = time
    document.title = time
}

timerBtns.forEach(btn => btn.addEventListener('click', startTimer))

function startTimer() {
    const seconds = parseInt(this.dataset.time)
    lastTimer = seconds
    timer(seconds)
}

const reset = document.querySelector('#reset')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

reset.addEventListener('click', resetTimer)
stop.addEventListener('click', pauseTimer)
start.addEventListener('click', restartTimer)

function resetTimer() {
    displayTimeLeft(lastTimer)
    currentTimer = lastTimer
    clearInterval(countdown)
}

function pauseTimer() {
    const timeLeft = display.textContent
    clearInterval(countdown)
    currentTimer = (parseInt(timeLeft.split(':')[0] * 60 + parseInt(timeLeft.slice(-2))))
}

function restartTimer() {
    timer(currentTimer)
}