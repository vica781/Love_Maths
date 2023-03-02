//Wait for the DOM to finish loading before running the game
//Getr the button elements and add event listeners to them 

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttrubute("data-type") === "submit") {
                alert("You clicked Submit");
            } else {
                let gameType = this.getAttrubute("data-type");
                alert(`You click ${gameType}`);
            }
        })
    }
})


// /**
//  * The main gaim "loop", called when the script is first loaded
//  * and after the user's answer has been processed
//  */

// function runGame() {
//     //Creates two random numbers between 1 and 25
//     let num1 = Math.floor(Math.random() * 25) + 1;
//     let num2 = Math.floor(Math.random() * 25) + 1;
// }

// function checkAnswer() {

// }

// /**
//  * Gets the operands (the numbers) and the operator (plus, minus, etc.)
//  * directly from the DOM, and returns the correct answer
//  */
// function calculateCorrectAnswer() {
    
//     let operand1 = parseInt(document.getElementById('operand1').innerText);
//     let operand2 = parseInt(document.getElementById('operand2').innerText);
//     let operator = document.getElementById('operator').innerText;

//     if (operator === "+") {
//         return [operand1 + operand2, "addition"];
        
//     }
// }

// function incrementScore() {

// }

// function incrementWrongAnswer() {

// }

// function displayAdditionQuestion() {

// }

// function displaySubtractQuestion() {

// }

// function displayMultiplyQuestion() {

// }