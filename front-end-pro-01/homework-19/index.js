// Результат: [1, 2, 3, 4, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
function removeElement(arr, number) {
  let index = arr.indexOf(number);
  if (index !== -1) {
    arr.splice(index, 1);
  } else {
    console.log("error");
  }
  return arr;
}
newArray = removeElement(arr, 50);
console.log(newArray);
