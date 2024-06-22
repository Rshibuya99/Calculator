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




document.addEventListener("DOMContentLoaded", function() {
    // variables
    let numX        = NaN;
    let numY        = NaN;
    let operator    = NaN;

    const DISPLAY           = document.querySelector('.display');
    const MAIN_CONTAINER    = document.querySelector('.container-main');
    const calculate         = document.querySelector('#calculate');
    const dot               = document.querySelector('#dot')

    // calculator board
    MAIN_CONTAINER.addEventListener('click', function(e) {
        
        // display numbers
        if (e.target.classList.contains("numeric")) {
            if (DISPLAY.textContent == '0') {
                DISPLAY.textContent = `${e.target.textContent}`;
            }
            else {
                DISPLAY.textContent = `${DISPLAY.textContent}${e.target.textContent}`;
            }
            // storeNum();
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

    })

    // calculate
    calculate.addEventListener('click', function() {
        alert(`${DISPLAY.textContent}`);
    })




})