// Variables

let firstNumber;
let secondNumber;
let operatorCalc = '';
let result;

const displayNumber = document.querySelector('.displayNumber');
const displayOperator = document.querySelector('.displayOperator');

// Mathematical functions

function doMath(a, symbol) {
    secondNumber = displayNumber.textContent;
    displayNumber.textContent = '';
    displayOperator.textContent += ` ${+secondNumber}`;
    if (symbol == '+') {
        result = add(+a, +secondNumber);
    } else if (symbol == '-') {
        result = subtract(+a, +secondNumber);
    } else if (symbol == '*') {
        result = multiply(+a, +secondNumber);
    } else if (symbol == '/') {
        result = divide(+a, +secondNumber);
    }
    displayNumber.textContent = result;
}

function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b){
    return a * b;
};

function divide (a, b) {
    return a / b;
};


// Esta funcion muestra el número en pantalla

function addNumber(number) {
    displayNumber.textContent += number;
}

// Esta función guarda el primer número que se introduce

function saveNumber(operator) {
    firstNumber = displayNumber.textContent;
    operatorCalc = operator;
    displayNumber.textContent = '';
    displayOperator.textContent += `${firstNumber} ${operator}`;
    return firstNumber, operatorCalc;
}

// Esta función limpia el display 

function clearAll() {
    firstNumber = '';
    operatorCalc = ''
    secondNumber = ''
    displayNumber.textContent = '';
    displayOperator.textContent = '';
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    if (button.className == 'number') {
        button.addEventListener('click', () => addNumber(button.textContent));
    } else if (button.className == 'operator' && operatorCalc == '') { // NO FUNCIONA y operatorCalc está vacio porque es la primera vez que se pulsa
        button.addEventListener('click', () => saveNumber(button.textContent));
    } else if (button.className == 'operator' && operatorCalc != '') { // NO FUNCIONA o el className es operator y el operatorCalc existe 
        button.addEventListener('click', () => doMath(firstNumber, operatorCalc));
    } else if (button.className == 'equals') { 
        button.addEventListener('click', () => doMath(firstNumber, operatorCalc));
    } else if (button.className == 'clear') {
        button.addEventListener('click', () => clearAll());
    }
});

// Hacer que si el número es muy largo el tamaño del texto se ajuste.
// Hacer que se puedan encadenar varias operaciones, 
//    osease que el operator haga la cuenta igual que el equal si no es el primero 