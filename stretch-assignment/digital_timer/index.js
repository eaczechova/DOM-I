// Creates Start and Reset button and place it inside of a wrapper div

const divWrapper = document.createElement("div");
divWrapper.classList.add("buttons-wrapper");
document.body.appendChild(divWrapper);

const button = document.createElement("button");
button.textContent = "Start";

button.addEventListener("click", function () {
    interval = setInterval(timer, 1000);
});

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";

resetButton.addEventListener("click", reset);

// List of selectors used to update timer values

const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
const digits = document.querySelectorAll(".digit");

// TIMER FUNCTION

let interval = null;
let secondOnesValue = 0;
let secondTensValue = 0;

function timer() {
    // Set all timer values to 0 when the timer function starts
    digits.forEach(item => {
        if(item.textContent !== ":") {
            item.textContent = 0;
        };
    });

    if (secondOnesValue < 9) {
        secondOnesValue++;
    }
    else {
        secondOnesValue = 0;
        secondTens.textContent = 1;
    }
    
    secondOnes.textContent = `${secondOnesValue}`;

    // Change digits color to red once the timer hits 10 and clear setInterval() function;
    // add disabled attribute to the button until the timer finishes and removes once it hits 10

    if (secondTens.textContent == 1) {
        digits.forEach(item => item.classList.add("redDigit"));
        clearInterval(interval);
        button.removeAttribute("disabled");
    } else {
        digits.forEach(item => item.classList.remove("redDigit"));
        button.setAttribute("disabled", "disabled");
    }
}

// RESET FUNCTION

function reset() {
    digits.forEach(item => {
        if (item.textContent !== ":") {
            item.textContent = 0;
        };
    });

    secondOnesValue = 0;
    secondTensValue = 0;
    clearInterval(interval);
    button.removeAttribute("disabled");
}

// Layout and add style to buttons in JS for training puropses

document.body.style.flexWrap = "wrap";
const divWrapperSelector = document.querySelector(".buttons-wrapper");
divWrapperSelector.style.width = "100%";
divWrapperSelector.style.display = "flex";
divWrapperSelector.style.justifyContent = "center";
button.style.padding = "10px 15px";
button.style.marginRight = "10px";
resetButton.style.padding = "10px 15px";
button.style.backgroundColor= "green";
button.style.color = "white";
button.style.borderRadius = "5px";
resetButton.style.backgroundColor = "red";
resetButton.style.color = "white";
resetButton.style.borderRadius = "5px";

divWrapperSelector.appendChild(button);
divWrapperSelector.appendChild(resetButton);