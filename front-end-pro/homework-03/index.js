var want = prompt("что сделать:\nadd, sub, mult, div");
var num1 = prompt("первое число");
var num2 = prompt("второе число");
if (want === "add") {
  alert(num1 + "+" + num2 + "=" + (Number(num1) + Number(num2)));
} else if (want === "sub") {
  alert(+num1 - +num2);
} else if (want === "mult") {
  alert(+num1 * +num2);
} else if (want === "div") {
  alert(+num1 / +num2);
}
