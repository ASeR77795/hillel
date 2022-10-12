let num1 = prompt("первое число");
let num2 = prompt("второе число");
let sum = Number(num1) + Number(num2);
let sub = Number(num1) - Number(num2);
let mult = Number(num1) * Number(num2);
let div = Number(num1) / Number(num2);
alert(
  "Пользователь ввел " +
    num1 +
    " и " +
    num2 +
    " : " +
    "\n" +
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
