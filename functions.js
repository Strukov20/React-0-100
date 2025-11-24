'use strict';

function showFirstMessage() {
    console.log('First Task');
}
showFirstMessage();

function showFirstMessageWithPar(text) {
    console.log(text);
}
showFirstMessage("Hello World!");

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));


//-----------------

const usdCurrency = 28;
const eurCurrency = 32;
const discount = 0.9;

function convert(amount, curr) {
    return amount * curr;
}

function promotion(result) {
    return result * discount;
}
const res = convert(500, usdCurrency)
promotion(res);


function sayHello(name) {
    return `Hello, ${name}!`;
}


function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1];
}
console.log(returnNeighboringNumbers(5));

function getMathResult(number, length) {
    let result = '';

    if (typeof(length) !== 'number' || length <= 0) {
        return number;
    }  
    for (let i=1; i <= length; i++) {
        if (i === length) {
            result += `${number * i}`;
        } else {
            result += `${number * i}---`;
        }
    }
    return result;
}

console.log(getMathResult(5, 3));
console.log(getMathResult(0, 3));
console.log(getMathResult(3, 10));