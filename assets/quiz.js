// Creating timer to sit in top right corner
var quizTimer = 50
var countdown = setInterval(function() {
    if(quizTimer <= 0) {
        clearInterval(countdown);
        document.getElementById('#timer').innerText = "Time's up!";
    } else {
        document.getElementById('#timer').innerText = quizTimer + ' seconds remain';
    }
    quizTimer --;
}, 1000);

