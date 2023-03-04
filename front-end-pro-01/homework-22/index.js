const arr1 = ["Tesla", "BMW", "Zaz"];
const arr = {
  345678: {
    name: "Pasha",
    lastname: "Fedorenko",
    age: 27,
  },
  123445: {
    name: "Saha",
    lastname: "Petrov",
    age: 30,
  },
  012345: {
    name: "Bob",
    lastname: "Ghuwi",
    age: 18,
  },
};

let id = [];
for (let key in arr) {
  id.push(key);
  id.push(arr[key]);
}
console.log(id);
console.log(Object.entries(arr));
// console.log(id);
// let id1 = [];
// for (let key in arr) {
//   id1.push(arr[key]);
// }
// console.log(id1);
// let id2 = [];
// for (const item of arr1) {
//   console.log(arr1[item]);
// }
// console.log(Object.values(arr));
