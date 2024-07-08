# Design a Webpage using JavaScript eith a minimum of five mathematical operations.
### Program:
#### app.js
```
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

```
#### index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <div class="display" id="display">0</div>
        <div class="buttons">
            <button onclick="clearDisplay()">AC</button>
            <button onclick="deleteLast()">DEL</button>
            <button onclick="appendOperation('/')">/</button>
            <button onclick="appendOperation('*')">*</button>
            <button onclick="appendNumber('7')">7</button>
            <button onclick="appendNumber('8')">8</button>
            <button onclick="appendNumber('9')">9</button>
            <button onclick="appendOperation('-')">-</button>
            <button onclick="appendNumber('4')">4</button>
            <button onclick="appendNumber('5')">5</button>
            <button onclick="appendNumber('6')">6</button>
            <button onclick="appendOperation('+')">+</button>
            <button onclick="appendNumber('1')">1</button>
            <button onclick="appendNumber('2')">2</button>
            <button onclick="appendNumber('3')">3</button>
            <button onclick="calculateResult()">=</button>
            <button onclick="appendNumber('0')" class="zero">0</button>
            <button onclick="appendNumber('.')">.</button>
            <button onclick="appendOperation('%')">%</button>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>

```
#### style.css
```
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to right, #0000ff, #220722);
    margin: 0;
    font-family: Arial, sans-serif;
}

.calculator {
    background-color: #dcdcdc;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.display {
    font-size: 2em;
    background-color: white;
    padding: 10px;
    margin-bottom: 10px;
    text-align: right;
    border-radius: 5px;
    border: 1px solid #ddd;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

button {
    font-size: 1.5em;
    padding: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #f0f0f0;
}

button:active {
    background-color: #ddd;
}
```
![Screenshot 2024-07-08 114809](https://github.com/vijayganeshn96/Calculator/assets/103403571/00161417-79f4-4977-af80-5a81c23abb92)
