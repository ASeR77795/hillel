// function getImg() {
//   const random = Math.floor(Math.random() * (9 - 1 + 1) + 1);
//   const img = document.createElement("img");
//   const elem = document.querySelector("div");
//   elem.appendChild(img);
//   img.src = `${"./img/"}${random}${".jpg"}`;
// }
// getImg();
const min = 1;
const max = 9;
const elem = document.querySelector(".container");

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function createImg() {
  const img = document.createElement("img");
  img.src = `${"./img/"}${getRandom(min, max)}${".jpg"}`;
  return img;
}
function getImg() {
  for (let i = 0; i <= max; i++) {
    const div = document.createElement("div");
    const img = createImg();
    elem.appendChild(div);

    div.appendChild(img);
  }
}
getImg();
