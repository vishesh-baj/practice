console.log("COLOR FLIPPER GAME");

console.log("COLOR FLIPPER");
const body = document.body;
const colorFlipperButton = document.querySelector(".color-flipper-button");
const randomColor = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];
const generateRandomColor = () => {
  let randomCharArr = [];
  for (let i = 0; i < 6; i++) {
    const randomCharacter =
      randomColor[Math.floor(Math.random() * randomColor.length)];
    randomCharArr.push(randomCharacter);
  }

  if (randomCharArr.length === 6) {
    let colorString = "";
    randomCharArr.map((character) => {
      const concatedString = colorString.concat(character);
      colorString = concatedString;
    });
    console.log("CONCATINATED COLOR STRING: ", colorString);
    return colorString;
  }
};

colorFlipperButton.addEventListener("click", () => {
  console.log("BUTTON CLICKED");
  generateRandomColor();

  body.style.backgroundColor = `#${generateRandomColor()}`;
});
