// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму та кількість позитивних елементів.
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, ост альні обнулити.
const array = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
// 1 Знайти суму та кількість позитивних елементів.
// let sum = 0;
// let countPositive = 0;
// array.forEach((number) => {
//   if (number > 0) {
//     sum += number;
//     countPositive += 1;
//   }
// });
let countPositive = 0;
let sum = array.reduce((total, number) => {
  if (number > 0) {
    countPositive += 1;
    total += number;
  }
  return total;
}, 0);
console.log(sum, countPositive);
//  2 Знайти мінімальний елемент масиву та його порядковий номер.
let minIndex = array.indexOf(Math.min.apply(null, array));
console.log(minIndex);
let minValue = Math.min.apply(null, array);
console.log(minValue);
//  3 Знайти максимальний елемент масиву та його порядковий номер.
let maxIndex = array.indexOf(Math.max.apply(null, array));
console.log(maxIndex);
let maxValue = Math.max.apply(null, array);
console.log(maxValue);
// 4 Визначити кількість негативних елементів.
let countNegative = 0;
array.forEach((number) => {
  if (number < 0) {
    countNegative += 1;
  }
});
console.log(countNegative);
// // 5 Знайти кількість непарних позитивних елементів.
let countUnpariedPositive = 0;
array.forEach((number) => {
  if (number > 0 && number % 2 !== 0) {
    countUnpariedPositive += 1;
  }
});
console.log(countUnpariedPositive);
// // 6  Знайти кількість парних позитивних елементів.
let countPariedPositive = 0;
array.forEach((number) => {
  if (number > 0 && number % 2 === 0) {
    countPariedPositive += 1;
  }
});
console.log(countPariedPositive);
// // 7  Знайти суму парних позитивних елементів.
// let sumPositivePared = 0;
// array.forEach((number) => {
//   if (number > 0 && number % 2 === 0) {
//     sumPositivePared += number;
//   }
// });
let sumPositivePared = array.reduce((total, number) => {
  if (number > 0 && number % 2 === 0) {
    total += number;
  }
  return total;
}, 0);
console.log(sumPositivePared);
// // 8 Знайти суму непарних позитивних елементів.
// let sumPositiveUnpared = 0;
// array.forEach((number) => {
//   if (number > 0 && number % 2 !== 0) {
//     sumPositiveUnpared += number;
//   }
// });
let sumPositiveUnpared = array.reduce((total, number) => {
  if (number > 0 && number % 2 !== 0) {
    total += number;
  }
  return total;
}, 0);
console.log(sumPositiveUnpared);
// // 9 Знайти добуток позитивних елементів.
// let compositionPositive = 1;
// array.forEach((number) => {
//   if (number > 0) {
//     compositionPositive = compositionPositive * number;
//   }
// });
let compositionPositive = array.reduce((total, number) => {
  if (number > 0) {
    total *= number;
  }
  return total;
});
console.log(compositionPositive);
// // 10 Знайти найбільший серед елементів масиву, ост альні обнулити.
array.forEach((number, index) => {
  if (index !== maxIndex) {
    array[index] = 0;
  }
});
console.log(array);
