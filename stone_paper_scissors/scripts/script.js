console.log("STONE PAPER SCISSORS");

// UI
const welcomeWrapper = document.querySelector(".welcome-wrapper");
// INPUTS
const playerNameInput = document.querySelector("#player-name");
// BUTTONS
const submitButton = document.querySelector(".submit-button");
const stoneButton = document.querySelector("#stone-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const computerChoiceButton = document.querySelector("#computer-choice-button");
const nameTitle = document.querySelector(".name-title");
let username = "";
let userChoice = "";
let computerChoice = "";
let showInput = true;
const choicePool = ["STONE", "PAPER", "SCISSORS"];

const checkShowInputVisiblity = () => {
  if (!showInput) {
    // welcomeWrapper.classList.remove("welcome-wrapper");
    welcomeWrapper.classList.add("hidden");
    nameTitle.textContent = username;
  } else {
    welcomeWrapper.classList.remove("hidden");
  }
};

// player name event
playerNameInput.addEventListener("input", (e) => {
  // console.log("USERNAME: ", username);
  username = e.target.value;
});

submitButton.addEventListener("click", () => {
  alert(`Welcome ${username}`);
  playerNameInput.value = "";
  showInput = false;
  checkShowInputVisiblity();
});
