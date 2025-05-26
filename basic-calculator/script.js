// This file contains the JavaScript code for the calculator's functionality.

const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function chooseOperator(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (operator) {
        firstOperand = operate(operator, firstOperand, parseFloat(currentInput));
    }
    operator = op;
    currentInput = '';
}

function operate(op, a, b) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) return 'Error';
            return a / b;
        default:
            return b;
    }
}

function calculate() {
    if (currentInput === '' || firstOperand === null) return;
    currentInput = operate(operator, firstOperand, parseFloat(currentInput)).toString();
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput || '0';
}

function clear() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

// Event listeners for buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => appendNumber(button.innerText));
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => chooseOperator(button.innerText));
});

document.getElementById('equals').addEventListener('click', calculate);
document.getElementById('clear').addEventListener('click', clear);