const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, number) {
  array.splice(array.indexOf(number), 1);
}
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]