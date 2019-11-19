let countdown;
let display = document.querySelector('.time')
let timerBtns = document.querySelectorAll('[data-time]')

function timer(seconds) {
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
    remainderSeconds = seconds % 60

    display.textContent = `${minutes < 10 ? '0' : ''}${minutes} : ${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`
    document.title = display.textContent
}

timerBtns.forEach(btn => btn.addEventListener('click', startTimer))

function startTimer() {
    const seconds = parseInt(this.dataset.time)
    timer(seconds)
}


