const redSlider = document.querySelector("#red");
const greenSlider = document.querySelector("#green");
const blueSlider = document.querySelector("#blue");
const button = document.querySelector("button");
const body = document.body;

function updateBackgroundColor(){
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;
    // body.style.backgroundColor = "rgb(" + redValue + " " + greenValue + " " + blueValue + ")";
    body.style.backgroundColor = `rgb(${redValue} ${greenValue} ${blueValue})`;
}

redSlider.addEventListener("input", updateBackgroundColor);
greenSlider.addEventListener("input", updateBackgroundColor);
blueSlider.addEventListener("input", updateBackgroundColor);