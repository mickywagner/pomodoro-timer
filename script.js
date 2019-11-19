let countdown;
let display = document.querySelector('.time')

function timer(seconds) {
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
    seconds = seconds % 60


    display.textContent = `${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`
}

