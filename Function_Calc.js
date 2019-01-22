var add = (a,b) => {return a + b};
var multiply = (a,b) => {return a * b};
var subtract = (a,b) => {return a - b};
var divide = (a,b) => {return a / b};


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