let display = document.getElementById('display');
let currentInput = '';
let currentOperation = '';

function clearDisplay() {
    currentInput = '';
    currentOperation = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperation(operation) {
    if (currentInput === '' || "+-*/%".includes(currentInput.slice(-1))) return; // Prevent consecutive operators
    currentOperation = operation;
    currentInput += operation;
    display.innerText = currentInput;
}

function calculateResult() {
    if (currentInput === '' || "+-*/%".includes(currentInput.slice(-1))) return; // Prevent calculation if input ends with an operator
    try {
        // Replace percentage with appropriate calculation
        currentInput = currentInput.replace(/(\d+)%/, (match, p1) => (parseFloat(p1) / 100).toString());
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
    }
}
