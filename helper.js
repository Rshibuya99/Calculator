function operateAdd(x, y) {
    return x + y
}

function operateSubtract(x, y) {
    return x - y
}

function operateMultiply(x, y) {
    return x * y
}

function operateDivide(x, y) {
    return x / y
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

export {operate};