function add(a,b) {
    return a + b;
}

function multiply(a,b) {
    return a * b;
}
var myArray = [add, multiply, function(a,b) { return a-b;}];

for (var i=0; i < myArray.length; i++) {
    var ans = myArray[i](2,5);
    console.log(ans);
}

(function myData() {
    console.log('myData was executed!');
})();
