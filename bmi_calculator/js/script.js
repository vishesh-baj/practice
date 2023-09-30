console.log('BMI CALCULATOR')

const weightInput = document.querySelector("#weight-input");
const heightInput = document.querySelector("#height-input");
const bmiButton = document.querySelector("#bmi-button");
const bmiResult = document.querySelector("#bmi-result");
const bmiComment = document.querySelector("#bmi-comment");
let weight = 0;
let height = 0;

weightInput.addEventListener("input",() => {
    const inputValue = weightInput.value;
    weight=inputValue;
    console.log("WEIGHT VALUE: ", weight);
});

heightInput.addEventListener("input",() => {
    const inputValue = heightInput.value;
    height=inputValue;
    console.log("HEIGHT VALUE: ", height)
});

bmiButton.addEventListener("click", () => {
    if(!isNaN(weight) && !isNaN(height) && height > 0){
        const result = weight / (height * height);
        console.log("BMI RESULT: ", result);
        if(result > 18.5 && result < 24.9){
            bmiComment.textContent = "BMI in healthy range"
        } else if (result > 25.0 && result <29.9){
            bmiComment.textContent = "BMI in overweight range"
        } else {
            bmiComment.textContent = "BMI in obese range"
        }

        bmiResult.textContent = result.toFixed(2);
    }
});
