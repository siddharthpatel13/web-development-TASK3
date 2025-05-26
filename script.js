const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (button.id === 'clear') {
            currentInput = '';
            display.value = '';
        } else if (button.id === 'equals') {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
                resultDisplayed = true;
            } catch {
                display.value = 'Error';
                currentInput = '';
            }
        } else {
            if (resultDisplayed && !isNaN(value)) {
                currentInput = value;
                resultDisplayed = false;
            } else {
                currentInput += value;
            }
            display.value = currentInput;
        }
    });
});