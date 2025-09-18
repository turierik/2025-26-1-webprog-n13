const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const body = document.body;

function updateBackgroundColor(){
    body.style.backgroundColor = `rgb(${
        Array.from(inputs).map(input => input.value).join(" ")
    })`;
}

inputs.forEach(input => input.addEventListener("input", updateBackgroundColor));