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
// switch (numOrStr) {
//   case null:
//     console.log("ви скасували");
//     break;
// }
const getRes2 = (numOrStr) => {
  switch (typeof numOrStr) {
    case "object":
      console.log("ви скасували");
      break;
    case "string":
      switch (numOrStr.trim()) {
        case "":
          console.log("Empty String");
          break;
        default:
          switch (isNaN(+numOrStr)) {
            case true:
              console.log("Number is isNaN");
              break;
            default:
              console.log("OK!");
          }
      }
  }
};
console.log(getRes2(numOrStr));
