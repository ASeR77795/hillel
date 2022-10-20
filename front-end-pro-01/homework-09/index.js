// // - Вивести на сторінку в один рядок через кому числа від 10 до 20
// let srt = "";
// for (num1 = 10; num1 < 20; num1++) {
//   console.log((str += num1 += ","));
// }
// // - Вивести квадрати чисел від 10 до 20
// for (num2 = 10; num2 < 20; num2++) {
//   console.log(num2 * num2);
// }
// // - Вивести таблицю множення на 7
// for (num3 = 1; num3 <= 10; num3++) {
//   console.log(num3 * 7);
// }
// // -Знайти суму всіх цілих чисел від 1 до 15
// let sum = 1;
// for (num4 = 1; num4 <= 15; num4 += 1) {
//   sum += num4;
// }
// console.log(sum);
// // -Знайти добуток усіх цілих чисел від 15 до 35
// for (num5 = 15; num5 <= 35; num5 += 1) {
//   console.log(num5 * num5);
// }
// // -Знайти середнє арифметичне всіх цілих чисел від 1 до 500
// let sum1 = 0;
// for (num6 = 1; num6 <= 500; num6 += 1) {
//   sum1 += num6;
// }
// console.log(sum1 / 500);
// -Вивести суму лише парних чисел в діапазоні від 30 до 80
// let sum2 = 0;
// for (num7 = 30; num7 <= 80; num7 += 2) {
//   sum2 += num7;
// }
// console.log(sum2);
// - Вивести всі числа в діапазоні від 100 до 200 кратні 3
// let sum3 = 0;
// for (num8 = 100; num8 <= 200; num8 += 3) {
//   sum3 += num8;
//   console.log(num8);
// }
// -Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// let num9 = 15;
// for (num10 = 1; num10 <= num9; num10++) {
//   if (num9 % num10 === 0) {
//     console.log(num10);
//   }
// }
// -Визначити кількість його парних дільників
// let num11 = 15;
// let arr = [];
// for (num12 = 1; num12 <= num11; num12++) {
//   if (num11 % num12 === 0 && num12 % 2 === 0) {
//     arr.push(num12);
//   }
// }
// console.log(arr.length);
// -Знайти суму його парних дільників
// let num13 = 16;
// let sum4 = 0;
// for (num14 = 1; num14 <= num13; num14++) {
//   if (num13 % num14 === 0 && num14 % 2 === 0) {
//     console.log((sum4 += num14));
//   }
// }
// -Надрукувати повну таблицю множення від 1 до 10
let result = "\n";
for (num15 = 1; num15 < 10; num15++) {
  for (num16 = 1; num16 < 11; num16++) {
    result += num15 * num16 + " ";
  }
  console.log((result += "\n"));
}
