score=0;
function updateScore()
{
    score=score+1;
    document.getElementById("score").innerHTML = "Vayu's score: " + score;
}

function saveScore()
{
    localStorage.setItem("score" , score);
}

function nextPage()
{
    window.location = "activity_2.html";
}