function getImg() {
  const random = Math.floor(Math.random() * (9 - 1 + 1) + 1);
  const img = document.createElement("img");
  const elem = document.querySelector("div");
  elem.appendChild(img);
  img.src = `${"./img/"}${random}${".jpg"}`;
}
getImg();
//   return (elem.src = `${"./img/"}${random}${".jpg"}`);
