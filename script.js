document.addEventListener("DOMContentLoaded", function() {
    // variables
    let numX        = NaN;
    let numY        = NaN;
    let operator    = NaN;

    let replaceDisplay = true;

    const MAX_LEN           = 10;
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

            numX = NaN
            numY = NaN
            operator = NaN

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

            numX = NaN
            numY = NaN
            operator = NaN
            
            replaceDisplay = true;
            result = truncateNum(result, MAX_LEN)
            DISPLAY.textContent = result;

        }
    })
})


function truncateNum(num, max_len) {
    let newNum = num.toPrecision(3)
    newNum = newNum.toString().substring(0, max_len);
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