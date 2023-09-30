console.log("STONE PAPER SCISSORS");

// UI
const welcomeWrapper = document.querySelector(".welcome-wrapper");
const finalStatement = document.querySelector(".final-statement");

// INPUTS
const playerNameInput = document.querySelector("#player-name");

// BUTTONS
const submitButton = document.querySelector(".submit-button");
const stoneButton = document.querySelector("#stone-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const computerChoiceButton = document.querySelector("#computer-choice-button");
const nameTitle = document.querySelector(".name-title");
const submitChoiceButton = document.querySelector(".submit-choice-button");

let username = "";
let userChoice = "";
let showInput = true;
let canChoose = true;
const choicePool = ["STONE", "PAPER", "SCISSORS"];
let gameOver = false;

const checkShowInputVisiblity = () => {
  if (!showInput) {
    welcomeWrapper.classList.add("hidden");
    nameTitle.textContent = username;
  } else {
    welcomeWrapper.classList.remove("hidden");
  }
};

// player name event
playerNameInput.addEventListener("input", (e) => {
  username = e.target.value;
});

submitButton.addEventListener("click", () => {
  alert(`Welcome ${username}`);
  playerNameInput.value = "";
  showInput = false;
  checkShowInputVisiblity();
});

submitChoiceButton.addEventListener("click", () => {
  if (!canChoose) {
    const computerChoiceFinal =
      choicePool[Math.floor(Math.random() * choicePool.length)];

    if (computerChoiceFinal === userChoice) {
      finalStatement.textContent = "It's a draw";
    } else if (
      (userChoice === "STONE" && computerChoiceFinal === "SCISSORS") ||
      (userChoice === "PAPER" && computerChoiceFinal === "STONE") ||
      (userChoice === "SCISSORS" && computerChoiceFinal === "PAPER")
    ) {
      finalStatement.textContent = "You WON";
    } else {
      finalStatement.textContent = "You LOSE";
    }

    computerChoiceButton.textContent = computerChoiceFinal;
    canChoose = true;
  }
});

stoneButton.addEventListener("click", () => {
  if (canChoose) {
    userChoice = "STONE";
    canChoose = false;
  }
});

paperButton.addEventListener("click", () => {
  if (canChoose) {
    userChoice = "PAPER";
    canChoose = false;
  }
});

scissorsButton.addEventListener("click", () => {
  if (canChoose) {
    userChoice = "SCISSORS";
    canChoose = false;
  }
});
