var readlineSync = require('readline-sync');

var firstNum = parseInt(readlineSync.question('Your First Number? '));
var secondNum = parseInt(readlineSync.question('Your Second Number? '));
var operator = readlineSync.question('Your Operator (+, -, *, /)? ');

function calc(a, b, op){
    if (op == "+"){
        return add_num(a,b);
    }
    else if (op == "-"){
        return a-b;
    }
    else if (op == "/"){
        return a/b;
    }
    else if (op == "*"){
        return a*b;
    }
    else {
        return "Ya screwed up!"
    }
}

function add_num(a,b){return a+b;}

console.log(calc(firstNum, secondNum, operator));