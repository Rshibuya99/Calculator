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
    if (operator == "+") {
        return operateAdd(x, y)
    }
    else if (operator == "-") {
        return operateSubtract(x, y)
    }
    else if (operator == "x" || operator == "*") {
        return operateMultiply(x, y)
    }
    else if (operator == "/" || operator == "÷") {
        if (y == 0) {
            throw new RangeError("Cannot divide by zero")
        }
        return operateDivide(x, y)
    }
    else {
        return NaN
    }
}

function evaluateNum(n) {
    if (parseInt(n) == false) {
        return NaN
    }
    else {
        return parseInt(n)
    }
}


export {operate};