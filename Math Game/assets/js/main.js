

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

runGame("addition");

})

function runGame(gameType) {
    
    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    let num1 = Math.floor(Math.random()* 25) + 1;
    let num2 = Math.floor(Math.random()* 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "substract") {
        displaySubstractQuestion(num1, num2);
    } else if (gameType === "divide") {
        displayDivideQuestion(num1, num2);
    } else {
        alert(`Unknown game type:" ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;

}

}

function checkAnswer() {
    
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculateAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculateAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incremetScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculateAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculateAnswer[1]);

}

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById(`operand1`).innerText);
    let operand2 = parseInt(document.getElementById(`operand2`).innerText);
    let operator = document.getElementById(`operator`).innerText;
    
    if (operator === "+") {
        return[operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return[operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return[operand1 - operand2, "substract"];
    } else if (operator === "/") {
        return[operand1 / operand2, "divide"];
    } else {
        alert(`Unimplemented oprator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
    
}

function incremetScore() {

    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
    
    
    
}

function incrementWrongAnswer() {
    
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById(`operand1`).textContent = operand1;
    document.getElementById(`operand2`).textContent = operand2;
    document.getElementById(`operator`).textContent = "+";
    
}

function displaySubstractQuestion(operand1, operand2) {
    document.getElementById(`operand1`).textContent = operand1 > operand2 ? operand1 : operand2
    document.getElementById(`operand2`).textContent = operand1 > operand2 ? operand2 : operand1
    document.getElementById(`operator`).textContent = "-";
    
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById(`operand1`).textContent = operand1;
    document.getElementById(`operand2`).textContent = operand2;
    document.getElementById(`operator`).textContent = "x";

}

function displayDivideQuestion(operand1, operand2) {
    document.getElementById(`operand1`).textContent = (operand1 * operand2);
    document.getElementById(`operand2`).textContent = operand2;
    document.getElementById(`operator`).textContent = "/";

}