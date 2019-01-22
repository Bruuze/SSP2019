// function add(a,b) {
//     return a + b;
// }
//
// function multiply(a,b) {
//     return a * b;
// }
// var myArray = [add, multiply, function(a,b) { return a-b;}];
//
// for (var i=0; i < myArray.length; i++) {
//     var ans = myArray[i](2,5);
//     console.log(ans);
// }
//
// (function myData() {
//     console.log('myData was executed!');
// })();
//
// function foo() {
//     console.log('2000 milliseconds have passed since this demo started');
// }
// setTimeout(foo, 2000);
//
// var funcName = (params, param2) => params + param2 + 2;
// console.log(funcName(2, 4));
//
// function outerFunction(arg) {
//     var variableInOuterFunction = arg;
//     function myValue() {
//         console.log(variableInOuterFunction);
//     }
//     myValue();
// }
// outerFunction('hello closure!'); // logs hello closure!

function makeAdder(x, x2) {

    console.log(x);
    console.log(x2);
    return function(y, y2){
        console.log(y);
        console.log(y2);
        return (x + x2) + (y + y2);
    }

}

var add5 = makeAdder(5, 10);
console.log(add5(25, 20));