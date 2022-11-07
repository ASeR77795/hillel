// Створити масив, довжину та елементи якого задає користувач.

// Відсортувати масив за зростанням.

// Видалити елементи з масиву з 2 по 4 (включно!).

// У міру змін виводити вміст масиву на сторінку.
let numbers;
let arr = [];
while ((numbers = prompt("Enter your number"))) {
  if (numbers === "" || isNaN(numbers)) {
    alert("Enter correct number");
    continue;
  }
  console.log(numbers);
  arr.push(+numbers);
}
arr.sort((a, b) => {
  return a - b;
});
console.log(arr);
arr.splice(1, 3);
console.log(arr);
