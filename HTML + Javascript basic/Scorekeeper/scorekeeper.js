var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.getElementById("p1Display")
var p2Display = document.getElementById("p2Display")
var gameOver = false;
var winningScore = 5;
var resetBtn = document.getElementById("reset");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span")

p1Button.addEventListener("click", () => {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner")
            gameOver = true

        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener("click", () => {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner")
            gameOver = true;
        }
        p2Display.textContent = p2Score
    }
})

resetBtn.addEventListener("click", () => {
    reset();
})

reset = () => {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", () => {
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Numbber(numInput.value);
    reset();
})


