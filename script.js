/*
1. display
2. store
    num 1
        after press numeric button
        after display calulation output / press equal sign
    num 2
        after press operators
    operator
        after press operators
3. calculate
4. display


*/
import {operate} from './helper.js';

document.addEventListener("DOMContentLoaded", function() {
    // variables
    let numX        = NaN;
    let numY        = NaN;
    let operator    = NaN;
    let MAX_LEN     = 10;
    let replaceDisplay = true;

    const DISPLAY           = document.querySelector('.display');
    const MAIN_CONTAINER    = document.querySelector('.container-main');

    // calculator board
    MAIN_CONTAINER.addEventListener('click', function(e) {
        
        // display numbers
        if (e.target.classList.contains("numeric")) {
            if (DISPLAY.textContent == '0') {
                replaceDisplay = true;
            }
            if (replaceDisplay == true) {
                DISPLAY.textContent = `${e.target.textContent}`;
                replaceDisplay = false;
            }
            else {
                if (DISPLAY.textContent.length < MAX_LEN) {
                    DISPLAY.textContent = `${DISPLAY.textContent}${e.target.textContent}`;
                }
            }
        }

        if (e.target.classList.contains("dot")) {
            let numDots = DISPLAY.textContent
                            .split("")
                            .filter(x => x==".")
                            .length
            if (numDots == 0) {
                DISPLAY.textContent = `${DISPLAY.textContent}${e.target.textContent}`;
            }
        }

        // reset display and variables
        if (e.target.classList.contains("clear")) {
            returnDefault(numX, numY, operator)
            replaceDisplay = true;
            DISPLAY.textContent = '0';
        }

        if (e.target.classList.contains("operator")) {
            numX = parseFloat(DISPLAY.textContent);
            operator = e.target.textContent;
            replaceDisplay      = true;
        }

        if (e.target.classList.contains("calculate")) {
            numY = parseFloat(DISPLAY.textContent);
            let result = operate(numX, numY, operator);
            returnDefault(numX, numY, operator);
            replaceDisplay = true;
            // result = truncateNum(result)
            // truncateNum(result)
            DISPLAY.textContent = result;

        }
    })
})


function returnDefault(num1, num2, operator) {
    num1 = NaN;
    num2 = NaN;
    operator = NaN;
}


function truncateNum(num, max_len) {
    return parseFloat(Math.round(num + 'e' + max_len) + 'e-' + max_len);
    let newNum = num.toString().substring(0, 10);
    return newNum
}


function operate(x, y, operator) {
    if (evaluateNum(x) == false || evaluateNum(y) == false) {
        return NaN
    }

    if (operator == "+") {
        return x + y
    }
    else if (operator == "-") {
        return x - y
    }
    else if (operator == "x" || operator == "*") {
        return x * y
    }
    else if (operator == "/" || operator == "÷") {
        if (y == 0) {
            return NaN
        }
        return x / y
    }
    else {
        return NaN
    }
}

function evaluateNum(n) {
    if (parseFloat(n) == false) {
        return NaN
    }
    else {
        return parseFloat(n)
    }
}