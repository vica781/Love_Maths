/**
 * The main gaim "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame() {
    //Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

/**
 * Gets the operands (the numbers) and the operator (plus, minus, etc.)
 * directly from the DOM, and returns the correct answer
 */
function calculateCorrectAnswer() {
    
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
        
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}