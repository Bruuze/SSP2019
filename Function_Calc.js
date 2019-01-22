function add(a,b) {
    return a + b;
}

function multiply(a,b) {
    return a * b;
}

function subtract(a,b) {
    
    return a - b;
    
}

function divide(a,b) {
    return a/b;
}

// function calc(op, a, b) {
//     return op;
// }

// var calc = (op) => console.log(op);

// calc(add(3,5));

function fullCalc(op,a,b) {
    if (op == "+"){
        return add(a,b);
    }
    else if (op == "-"){
        return subtract(a,b);
    }
    else if (op == "/"){
        return divide(a,b);
    }
    else if (op == "*"){
        return multiply(a,b);
    }
    else {
        return "Ya screwed up!"
    }
}


console.log(fullCalc("+",3,5));