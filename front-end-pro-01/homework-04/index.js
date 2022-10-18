let name = prompt("Enter your name!");
let age = +prompt("Enter your age!");
let surName = prompt("Enter your surname!");
if (isNaN(name) && !isNaN(age) && isNaN(surName)) {
  alert(`Ваше имя - ${name}\nВаш вщзраст - ${age}\nВаша фамилия - ${surName}`);
} else {
  alert("Incorect imput!");
}

const x = 12345;
console.log(String(x).split("").join(" "));
