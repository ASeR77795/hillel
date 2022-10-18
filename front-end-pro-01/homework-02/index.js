let num1 = prompt("первое число");
let num2 = prompt("второе число");
let num3 = prompt("третье число");
let text = "Среднее арефметическое чисел" + +num1 + num2 + num3 + "=";
if (isNaN(num1) && isNaN(num2) && isNaN(num3)) {
  alert("Incorect imput!");
} else if (num1 === "" || num2 === "" || num3 === "") {
  alert("Incorect imput!");
} else {
  alert(text + (+num1 + +num2 + +num3) / 3);
}
