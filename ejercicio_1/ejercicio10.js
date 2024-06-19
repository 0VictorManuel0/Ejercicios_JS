document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const keys = document.querySelectorAll('.keys button');

    let currentInput = '0';
    let operator = '';
    let firstOperand = null;
    let waitingForSecondOperand = false;

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyValue = key.textContent;

            if (keyValue === 'C') {
                clearDisplay();
            } else if (/\d|\./.test(keyValue)) {
                appendNumber(keyValue);
            } else if (keyValue === '=') {
                calculate();
            } else {
                setOperator(keyValue);
            }

            updateDisplay();
        });
    });

    function clearDisplay() {
        currentInput = '0';
        operator = '';
        firstOperand = null;
        waitingForSecondOperand = false;
    }

    function appendNumber(number) {
        if (waitingForSecondOperand) {
            currentInput = number;
            waitingForSecondOperand = false;
        } else {
            currentInput = currentInput === '0' ? number : currentInput + number;
        }
    }

    function setOperator(op) {
        if (operator !== '') {
            calculate();
        }
        operator = op;
        firstOperand = parseFloat(currentInput);
        waitingForSecondOperand = true;
    }

    function calculate() {
        const secondOperand = parseFloat(currentInput);
        let result = 0;

        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operator = '';
        firstOperand = null;
        waitingForSecondOperand = false;
    }

    function updateDisplay() {
        display.value = currentInput;
    }
});
