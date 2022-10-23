let numOrStr = prompt("input number or string");
console.log(numOrStr);

// if (numOrStr === null) {
//   console.log("ви скасували");
// } else if (numOrStr.trim() === "") {
//   console.log("Empty String");
// } else if (isNaN(+numOrStr)) {
//   console.log(" number is Ba_NaN");
// } else {
//   console.log("OK!");
// }

switch (numOrStr) {
  case null:
    console.log("ви скасували");
    break;
  case numOrStr.trim() === "":
    console.log("Empty String");
    break;
  case isNaN(+numOrStr):
    console.log(" number is Ba_NaN");
    break;
  default:
    console.log("OK!");
}

// let result;
// switch (numOrStr) {
//   case result:
//     result = null;
//     console.log("ви скасували");
//     break;
//   case result:
//     result = numOrStr.trim() === "";
//     console.log("Empty String");
//     break;
//   case result:
//     result = isNaN(+numOrStr);
//     console.log(" number is Ba_NaN");
//     break;
//   default:
//     console.log("OK!");
// }
