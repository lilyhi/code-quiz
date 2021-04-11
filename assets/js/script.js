// variables 


// questions/answers: 

// 1. When is it appropriate to use a semicolon? 
// Answers: A. B. C. D. 
// 2. What is the purpose of variables? 
// Answers: A. B. C. D. (To store a value)
// 3. How many data types are there? 
// Answers: A. B. C. D. (9 types)
// 4. When is it appropriate to add an if statement? 
// Answers: A. B. C. D. (When something satisfies the condition, run the code)
// 5. When do loops stop running? 
// Answers: A. B. C. D. (Once the condition returns false)

var questions = [
    {
        name: "When is it appropriate to use a semicolon?",
        choices: ["A. this is dummy text", "B. this is more dummy text", "C. dummy text", "D. When there is a complete statement"],
        answer: 3
    },
    {
        name: "What is the purpose of variables?",
        choices: ["A. To store a value", "B. this is more dummy text", "C. dummy text", "D. dummy text"],
        answer: 0
    },
    {
        name: "How many data types are there?",
        choices: ["A. another dummy text", "B. this is more dummy text", "C. 9 types", "D. dummy text"],
        answer: 2
    },
    {
        name: "When is it appropriate to add an if statement?",
        choices: ["A. yes dummy text", "B. When something satisfies the condition, run the code", "C. no dummy text", "D. dummy text"],
        answer: 1
    },
];

var score = 0;
var questionCounter = 0;
var timer = 60;
var interval;

document.getElementById("quiz").style.display="none";
document.getElementById("finish").style.display="none";


document.getElementById("start-button").onclick = function () {
    score = 0;
    questionCounter = 0;
    timer = 60;
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
}

document.getElementById("A").addEventListener("click", checkAnswer);
document.getElementById("B").addEventListener("click", checkAnswer);
document.getElementById("C").addEventListener("click", checkAnswer);
document.getElementById("D").addEventListener("click", checkAnswer);
document.getElementById("btn-score").addEventListener("click", saveScore);



// functions:

// start/click button 

// timer function (starts)

// questions/answers 

// answer incorrectly = time is subtracted from the clock

// game over function = all questions answered or times reaches 0 

// save score function (enter name or initials)

// view high score  