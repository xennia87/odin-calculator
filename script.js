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

function operate(operator, a, b) {
    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b) 
    } else if (operator == '/') {
        return divide(a, b);
    }
};

const displayNumber = document.querySelector('.displayNumber');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => addNumber(button.textContent));
});

function addNumber(number) {
    displayNumber.textContent += number
}