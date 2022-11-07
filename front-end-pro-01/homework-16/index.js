// Створити масив, довжину та елементи якого задає користувач.

// Відсортувати масив за зростанням.

// Видалити елементи з масиву з 2 по 4 (включно!).

// У міру змін виводити вміст масиву на сторінку.

let userImput = +prompt("How long?");
let number;
let arr = [];
for (let count = 0; count < userImput; count += 1) {
  number = prompt("Enter your number");
  if (number === "" || number === null || isNaN(number)) {
    count -= 1;
    alert("Enter correct number");
  } else {
    arr.push(number);
  }
}
arr.sort((a, b) => {
  return a - b;
});
console.log(arr);
arr.splice(1, 3);
console.log(arr);
