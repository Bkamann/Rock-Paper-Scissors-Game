// --- Score variables ---
let humanScore = 0;
let computerScore = 0;

// --- Get HTML elements ---
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const humanScoreSpan = document.getElementById("human-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultDiv = document.getElementById("result");

// --- Button event listeners ---
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

// --- Main game logic ---
function playRound(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let roundResult = "";

    if (playerChoice === computerChoice) {
        roundResult = `Draw! Both chose ${playerChoice}.`;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        roundResult = `You win! ${playerChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        roundResult = `You lose! ${computerChoice} beats ${playerChoice}.`;
        computerScore++;
    }

    // --- Update scores in the UI ---
    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
    resultDiv.textContent = roundResult;
}   