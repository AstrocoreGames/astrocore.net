function Add() {
    var NumOne = document.getElementById("InputOne").value;
    var NumTwo = document.getElementById("InputTwo").value;
    var NumberOne = parseFloat(NumOne);
    var NumberTwo = parseFloat(NumTwo);
    var Sum = NumberOne + NumberTwo;
    document.getElementById("Output").innerHTML = Sum;
}
function Subtract() {
    var NumOne = document.getElementById("InputOne").value;
    var NumTwo = document.getElementById("InputTwo").value;
    var NumberOne = parseFloat(NumOne);
    var NumberTwo = parseFloat(NumTwo);
    var Sum = NumberOne - NumberTwo;
    document.getElementById("Output").innerHTML = Sum;
}
function Multiply() {
    var NumOne = document.getElementById("InputOne").value;
    var NumTwo = document.getElementById("InputTwo").value;
    var NumberOne = parseFloat(NumOne);
    var NumberTwo = parseFloat(NumTwo);
    var Sum = NumberOne * NumberTwo;
    document.getElementById("Output").innerHTML = Sum;
}
function Divide() {
    var NumOne = document.getElementById("InputOne").value;
    var NumTwo = document.getElementById("InputTwo").value;
    var NumberOne = parseFloat(NumOne);
    var NumberTwo = parseFloat(NumTwo);
    var Sum = NumberOne / NumberTwo;
    document.getElementById("Output").innerHTML = Sum;
}