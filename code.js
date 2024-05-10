//credit to Coding Snow for cool mouse effect
const cursor = document.querySelector(".cursor");
var timeout;
//follow cursor on mousemove
//testing comment
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    // part of the mouseout code
    cursor.style.display = "block";

    //cursor effect on mouse stopped
    function mouseStopped(){
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
})

//cursor effects on mouseout

document.addEventListener("mouseout", () =>{
    cursor.style.display = "none";
})

//calculator code to make it function

//Get elements
const display = document.getElementById('display')
const buttons = document.querySelectorAll('button')

//Add event listeners

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            calculate();
        } else if (button.textContent === "C") {
            clearDisplay();
        } else {
            appendToDisplay(button.textContent);
        }
    });
});

//Functions
function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}