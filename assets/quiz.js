// Creating timer to sit in top right corner
var quizTimer = 50
var correctAnswer = quizTimer
var countdown = setInterval(function() {
    if(quizTimer <= 0) {
        clearInterval(countdown);
        document.getElementById('#timer').innerText = "Time's up!";
    } else {
        document.getElementById('#timer').innerText = quizTimer + ' seconds remain';
    }
    quizTimer --;
}, 1000);

var quizQuestions = [
{
    question: "How would you write 'Hello World' in an alert box",
    choices: ["alert('Hello World';", "msg('Hello World');", "alertBox('Hello World');","msgBox('Hello World');"],
    answer: "alert('Hello World');",
},
{
    question: "Which of the following is the correct way to write an 'IF' statement in JavaScript?",
    choices: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i = 5 then"],
    answer: "if (i == 5)",
},
{
    question: "How do you write a comment in JavaScript?",
    choices: ["<!--- ---!>", "''", "/aside", "//"],
    answer: "//",
},
{
    question: "What operator is used to assign a value to a variable?",
    choices: ["x", "=", "-", "*"],
    answer: "=",
},
];

//testing to make sure I can pull answers out of array
// console.log(quizQuestions[0])
// console.log(quizQuestions[0].answer)

var questionsIndex = 0;

var questionsH1 = document.querySelector('.questions');

var nextQuestion = document.querySelector('.quizQuestions');

// 
