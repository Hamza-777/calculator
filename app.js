// Functions

const clearOne = function(e) {
    let targetValue = e.target.parentElement.parentElement.previousElementSibling.lastElementChild.value;

    targetValue = targetValue.slice(0, targetValue.length - 1);

    e.target.parentElement.parentElement.previousElementSibling.lastElementChild.value = targetValue;

    e.preventDefault();
}

const clearInput = function(e) {
    e.target.parentElement.parentElement.previousElementSibling.lastElementChild.value = '';

    e.preventDefault();
}

const value = function(e) {
    let targetValue = e.target.parentElement.parentElement.previousElementSibling.lastElementChild.value;

    targetValue += e.target.value;

    e.target.parentElement.parentElement.previousElementSibling.lastElementChild.value = targetValue;

    e.preventDefault();
}

const result = function(e) {
    let equation = e.target.parentElement.parentElement.previousElementSibling.lastElementChild.value;

    const symbols = '+-x/';
    let x;

    for (let i = 0; i < equation.length; i++) {
        if ((equation[i] == symbols[0]) || (equation[i] == symbols[1]) || (equation[i] == symbols[2]) || (equation[i] == symbols[3])) {
            x = i;
        }
    }

    let y = equation[x];

    equation = equation.split(equation[x]);

    let a = parseFloat(equation[0]);
    let b = parseFloat(equation[1]);

    let ans;

    if (y == '+') {
        ans = a + b;
    } else if (y == '-') {
        ans = a - b;
    } else if (y == 'x') {
        ans = a * b;
    } else {
        ans = a / b;
    }

    e.target.parentElement.parentElement.previousElementSibling.lastElementChild.value = ans;

    // console.log(ans);

    e.preventDefault();
}

// Event Listeners

document.querySelector('.bAC').addEventListener('click', clearInput);
document.querySelector('.bC').addEventListener('click', clearOne);
document.querySelector('.div').addEventListener('click', value);
document.querySelector('.add').addEventListener('click', value);
document.querySelector('.sub').addEventListener('click', value);
document.querySelector('.bx').addEventListener('click', value);
document.querySelector('.b1').addEventListener('click', value);
document.querySelector('.b2').addEventListener('click', value);
document.querySelector('.b3').addEventListener('click', value);
document.querySelector('.b4').addEventListener('click', value);
document.querySelector('.b5').addEventListener('click', value);
document.querySelector('.b6').addEventListener('click', value);
document.querySelector('.b7').addEventListener('click', value);
document.querySelector('.b8').addEventListener('click', value);
document.querySelector('.b9').addEventListener('click', value);
document.querySelector('.b0').addEventListener('click', value);
document.querySelector('.dec').addEventListener('click', value);
document.querySelector('.equal').addEventListener('click', result);