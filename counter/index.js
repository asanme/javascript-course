const increaseButton = document.getElementById("increaseButton");
const resetButton = document.getElementById("resetButton");
const decreaseButton = document.getElementById("decreaseButton");
const counterText = document.getElementById("clickCounter");

let clickCount = 0;

increaseButton.addEventListener("click", () => {
    clickCount += 1;
    updateCounter(clickCount);
});

resetButton.addEventListener("click", () => {
    clickCount = 0;
    updateCounter(clickCount);
});

decreaseButton.addEventListener("click", () => {
    if (clickCount > 0) {
        clickCount -= 1;
    }

    updateCounter(clickCount);
});

function updateCounter(newValue) {
    counterText.textContent = newValue;
    console.log(`CounterValue: ${newValue}`);
}
