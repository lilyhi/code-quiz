var questions = [
    {
        name: "When is it appropriate to use a semicolon?",
        choices: ["A. In the middle of a statement", "B. At the end of a statement", "C. You never use one!", "D. When there is a complete statement"],
        answer: 3
    },
    {
        name: "What are the purpose of variables?",
        choices: ["A. To store a value", "B. To start a line of code", "C. To make a random list", "D. To check if someting is true or false "],
        answer: 0
    },
    {
        name: "How many data types are there?",
        choices: ["A. There are none!", "B. There are 21 types", "C. There are 9 types", "D. There are endless types"],
        answer: 2
    },
    {
        name: "What does an if statement do?",
        choices: ["A. It creates a loop", "B. If the condition is true, then it runs the code block", "C. There's no such thing", "D. It sets a timer"],
        answer: 1
    },
    {
        name: "When do loops stop running?",
        choices: ["A. Whenever you type stop!", "B. When the condition returns true", "C. Once the condition returns false", "D. When you type a new line of code"],
        answer: 2
    },
];

var score = 0;
var questionCounter = 0;
var timer = 30;
var interval;

document.getElementById("quiz").style.display="none";
document.getElementById("finish").style.display="none";


document.getElementById("start-button").onclick = function () {
    score = 0;
    questionCounter = 0;
    timer = 30;
    document.getElementById("start-div").style.display="none";
    document.getElementById("start-quiz").style.display="none";
    document.getElementById("finish").style.display="none";
    document.getElementById("quiz").style.display="block";
    interval = setInterval("updateClock()",1000);
    showQuestion();
}

function updateClock() {
    document.getElementById("timer").innerHTML="<p>Time: " + timer + "</p>";
    timer--;
    if (timer < 0) {
        clearInterval(interval);
        endQuiz();
    }
}

function showQuestion() {
    document.getElementById("question").innerHTML=questions[questionCounter].name;
    document.getElementById("A").textContent=questions[questionCounter].choices[0];
    document.getElementById("B").textContent=questions[questionCounter].choices[1];
    document.getElementById("C").textContent=questions[questionCounter].choices[2];
    document.getElementById("D").textContent=questions[questionCounter].choices[3];
}

function checkAnswer() {
    var answer = this.textContent;
    if (answer === questions[questionCounter].choices[questions[questionCounter].answer]){
        document.getElementById("feedback").innerHTML="Correct!";
        score++;
    }
    else {
        document.getElementById("feedback").innerHTML="Incorrect!";
        timer--;
    }
    questionCounter++;
    if (questionCounter < questions.length) {
        showQuestion();
    }
    else {
        clearInterval(interval);
        endQuiz();
    }

}

function endQuiz() {
    document.getElementById("quiz").style.display="none";
    document.getElementById("finish").style.display="block";
    document.getElementById("result").innerHTML="<p>Score: " + score + "/" + questions.length+"</p>";
}

function saveScore() {
    var playerName = document.getElementById("playerInitials").value.trim()
    console.log(playerName, score);
    var playerScore = {
        score: score,
        name: playerName
    }
    console.log(playerScore);
    // retrieving playerscore from localstorage
    var previousScoreList = JSON.parse(localStorage.getItem("AllScores")) || [];
    console.log(previousScoreList);
    // adding current player score to the list 
    previousScoreList.push(playerScore)
    console.log(previousScoreList);
    localStorage.setItem("AllScores", JSON.stringify(previousScoreList));
    alert("Submitted!");
    document.getElementById("btn-score").style.display="none";
}

document.getElementById("A").addEventListener("click", checkAnswer);
document.getElementById("B").addEventListener("click", checkAnswer);
document.getElementById("C").addEventListener("click", checkAnswer);
document.getElementById("D").addEventListener("click", checkAnswer);
document.getElementById("btn-score").addEventListener("click", saveScore);
