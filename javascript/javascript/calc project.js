const screen = document.getElementById("screen")
const buttons = document.getElementById("buttons")
const equal = document.getElementById("equal")
const ac = document.getElementById("reset")

// Step 1: Processing inputs and presenting output.


equal.addEventListener("mousedown", calculate)

for (let i = 0; i < buttons.children.length; i++) 
    if (buttons.children[i].innerText == "AC") {
        clearscreen()
    } 
    else {
    if (buttons.children[i].innerText != "=" ) {
        buttons.children[i].addEventListener("mousedown", function() {output(buttons.children[i].innerText)});
    }}


function calculate() {
    try {
        percentage()
        screen.innerText = eval(screen.innerText)
        } catch(error) {
        screen.innerText = "error"
        }
}

function clearscreen() {
    ac.addEventListener("mousedown", function() {
    screen.innerText = "0"
    })
}

function output(input) {
    screen.innerText = screen.innerText.concat(input)
}

function percentage() {
    screen.innerText = screen.innerText.replace("%", "/100")
}