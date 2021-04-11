 // retrieving playerscore from localstorage
var previousScoreList = JSON.parse(localStorage.getItem("AllScores")) || [];
console.log(previousScoreList);

for (i = 0; i < previousScoreList.length; i++) {
    var liTag = document.createElement("li");
    liTag.textContent= previousScoreList[i].name + " -- " + previousScoreList[i].score;
    console.log(liTag);
    var ulElement = document.getElementById("highScoreList"); 
    console.log(ulElement);
    ulElement.appendChild(liTag);
}