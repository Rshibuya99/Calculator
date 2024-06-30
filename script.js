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
// const {operate, operateAdd, operateDivide, operateMultiply, operateSubtract, evaluateNum} = require('./helper.');



document.addEventListener("DOMContentLoaded", function() {
    // variables
    let numX        = NaN;
    let numY        = NaN;
    let operator    = NaN;
    let MAX_LEN     = 10;
    let replaceDisplay = true;

    const DISPLAY           = document.querySelector('.display');
    const MAIN_CONTAINER    = document.querySelector('.container-main');
    const calculate         = document.querySelector('#calculate');
    const dot               = document.querySelector('#dot')

    // calculator board
    MAIN_CONTAINER.addEventListener('click', function(e) {
        
        // display numbers
        // TODO
        // fix replacing display properly
        if (e.target.classList.contains("numeric")) {
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
            // alert('lmao')
            numDots = DISPLAY.textContent
                            .split("")
                            .filter(x => x==".")
                            .length
            if (numDots == 0) {
                DISPLAY.textContent = `${DISPLAY.textContent}${e.target.textContent}`;
            }
        }

        // reset display and variables
        if (e.target.classList.contains("clear")) {
            numX                = NaN;
            numY                = NaN;
            operator            = NaN;
            DISPLAY.textContent = '0';
        }

        if (e.target.classList.contains("operator")) {
            numX = parseFloat(DISPLAY.textContent);
            operator = e.target.textContent;
            replaceDisplay      = true;
        }

    })

    // calculate




    calculate.addEventListener('click', function() {
        numY = parseFloat(DISPLAY.textContent);
        let result = operate(numX, numY, operator);
        numX                = NaN;
        numY                = NaN;
        operator            = NaN;
        replaceDisplay      = true;
        DISPLAY.textContent = result;

    })




})
