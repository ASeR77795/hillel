var num1 = prompt("первое число");
var num2 = prompt("второе число");
var sum = Number(num1) + Number(num2);
var sub = Number(num1) - Number(num2);
var mult = Number(num1) * Number(num2);
var div = Number(num1) / Number(num2);
alert(
  num1 +
    "+" +
    num2 +
    "=" +
    sum +
    "\n" +
    num1 +
    "-" +
    num2 +
    "=" +
    sub +
    "\n" +
    num1 +
    "*" +
    num2 +
    "=" +
    mult +
    "\n" +
    num1 +
    "/" +
    num2 +
    "=" +
    div +
    "\n"
);
