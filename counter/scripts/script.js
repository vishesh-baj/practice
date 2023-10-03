console.log("COUNTER APP");

const subtractButton = document.querySelector("#subtract-button");
const addButton = document.querySelector("#add-button");
const resetButton = document.querySelector("#reset-button");
const counterValue = document.querySelector(".counter");

let countValue = 0;

counterValue.textContent = countValue;

subtractButton.addEventListener("click", () => {
  console.log("CLICKED ON SUBTRACT BUTTON");
  if (countValue <= 0) {
    alert("Count cannoit be less than 0");
    return;
  }
  countValue = countValue - 1;
  counterValue.textContent = countValue;
});

addButton.addEventListener("click", () => {
  console.log("CLICKED ON ADD BUTTON");
  countValue++;
  counterValue.textContent = countValue;
});

resetButton.addEventListener("click", () => {
  console.log("CLICKED ON RESET BUTTON");
  countValue = 0;
  counterValue.textContent = countValue;
});
