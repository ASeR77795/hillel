// - Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)
// let str = "";
// for (num1 = 20; num1 <= 30; num1 += 0.5) {
//   str += num1 + " ";
// }
// console.log(str);
// - Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
// let doll = 27;
// for (num = 10; num <= 100; num += 10) {
//   console.log(num * doll);
// }

// - Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
// let num = +prompt();
// for (num1 = 1; num1 <= 100; num1 += 1) {
//   if (num >= num1 * num1) {
//     console.log(num1);
//   }
// }

// - Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
// let num = +prompt();
// next: for (let num1 = 2; num1 <= num; num1++) {
//   for (let num2 = 2; num2 < num1; num2++) {
//     if (num1 % num2 === 0) continue next;
//   }
//   alert(`${num1} простое`);

// function isPrime(n) {
//   if (n < 2) {
//     return "Число должно быть больше 1";
//   } else if (n === 2) {
//     return "Простое число";
//   }

//   let i = 2;
//   const limit = Math.sqrt(n);
//   while (i <= limit) {
//     if (n % i === 0) {
//       return "Составное число";
//     }
//     i += 1;
//   }

//   return "Простое число";
// }
// let input = prompt();
// alert(isPrime(parseInt(input)));

let n = parseInt(prompt());
if (n < 2) {
  alert("Число должно быть больше 1");
} else if (n === 2) {
  alert("Простое число");
}
let flag = false;
let i = 2;
let limit = Math.sqrt(n);
while (i <= limit) {
  if (n % i === 0 && flag !== true) {
    alert("Составное число");
    flag = true;
  }
  i += 1;
}
if (flag !== true) {
  alert("Простое число");
}

// - Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)
// let num = +prompt();
// for (num1 = 3; num1 < 1000; num1 *= num1) {
//   if (num === num1) {
//     alert(`можно ${num1 / 3}`);
//   } else {
//     continue;
//     alert("не можно");
//   }
// }
