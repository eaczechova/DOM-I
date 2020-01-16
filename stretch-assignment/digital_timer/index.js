// let interval = function() {
//     setInterval(timer, 1000);
// }

let interval = null;

const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");

const digits = document.querySelectorAll(".digit");

let secondOnesValue = 0;
let secondTensValue = 0;

function timer() {

    // To set all timer values to 0 when the timer function starts

    digits.forEach(item => {
        if(item.textContent !== ":") {
            item.textContent = 0;
        };
    });

    if (secondOnesValue < 9) {
        secondOnesValue++;}
    else {
        secondOnesValue = 0;
        secondTens.textContent = 1;
    
    }
    
    secondOnes.textContent = `${secondOnesValue}`;

    if (secondTens.textContent == 1) {
        digits.forEach(item => item.classList.add("redDigit"));
        clearInterval(interval);
    } else {
        digits.forEach(item => item.classList.remove("redDigit"));
    }
}

const button = document.createElement("button");
button.textContent = "Start";
document.body.appendChild(button);
button.addEventListener("click", function() {
    interval = setInterval(timer, 1000);});