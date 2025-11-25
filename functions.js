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

// -----------------

const fruts = 'SOME QWER';
console.log(fruts.indexOf('Q'));

const logg = 'Hello world';
console.log(logg.slice(3, 5));
console.log(logg.substring(4, 8));
console.log(logg.substr(4, 8));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));


//Functions - advanced
function calculateVolumeAndArea(length) {
    //let length = prompt('Enter length:','')
    const volume = length * length * length
    const area = length * length * 6;
    
    if(length >= 0 && typeof(length) === 'number' && Number.isInteger(length) === true) {
        console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`)
        return (`Объем куба: ${volume}, площадь всей поверхности: ${area}`)
    } else {
        console.log('При вычислении произошла ошибка')
        return ('При вычислении произошла ошибка')
    }
}

calculateVolumeAndArea(5.5)

function getCoupeNumber(slotNumber) {

    if (typeof (slotNumber) !== 'number' || slotNumber < 0 || !Number.isInteger(slotNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (slotNumber === 0 ) {
        return "Таких мест в вагоне не существует";
    }

    if (slotNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(slotNumber / 4);
}
getCoupeNumber(3)

function getTimeFromMinutes(time) {
    let hour = Math.floor(time / 60);
    let minutes = time % 60;

    if (typeof(time) !== 'number' || time < 0 || !Number.isInteger(time)) {
        return "Ошибка, проверьте данные";
    }

    if(time < 60 && time >= 0) {
       return `Это ${hour} часов и ${minutes} минут`
    }

    if(time < 120 && time >= 60) {
       return `Это ${hour} час и ${minutes} минут`
    }

    if(time <= 600 && time >= 120) {
       return `Это ${hour} часа и ${minutes} минут`
    }

    console.log(`${hour}:${minutes}`)
}

getTimeFromMinutes(70)

function findMaxNumber(numbers) {
    if(numbers.length < 4) {
        console.log(0)
        return 0
    }
    for (let i = 1; i < numbers.length; i++) {
        if (typeof(numbers[i]) !== 'number'){
            console.log(0)
            return 0
        }
    }

    let max = numbers[0];
    for (let j = 1; j < numbers.length; j++){
        if (numbers[j] > max) {
            max = numbers[j]; 
        }

    }
    console.log(max)
    return max
}

findMaxNumber([1, 2.4, 4.6])