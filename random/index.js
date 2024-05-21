const numberText = document.getElementById("randomNumber");
const generatorBtn = document.getElementById("generatorBtn")

generatorBtn.addEventListener("click", generateRandomNumber)

function generateRandomNumber() {
    newRandomValue = Math.floor(Math.random() * 100);
    numberText.textContent = newRandomValue.toString();
}
