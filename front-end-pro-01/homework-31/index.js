const imgArr = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWZjgt-mNzqA8m-Ggbqa-ZlbaYt8hdx-8WoBBvnwBdUKLQKgtCRsPRgpkyNJB1bxX0Rl8&usqp=CAU",
  "https://klike.net/uploads/posts/2019-11/1572612050_1.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8KpHuUbrwrSYrUb5zajstQh3NdwBrczeJijLJnvVFTEPja1EXHckKGXpAcnZ63UOshy0&usqp=CAU",
  "https://images.wallpaperscraft.ru/image/single/lodka_gory_ozero_135258_1280x720.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNyQXqHi2_RCsk53iPrpZ-_O-DX0M2Mn7Rfyj8i_G4QNR64AcFsYE5w0HAJGYHbgSSzo4&usqp=CAU",
];

const slider = document.querySelector(".slider");
const length = imgArr.length;
let count = 0;

const render = (arr) => {
  slider.innerHTML = "";

  const prevBtn = document.createElement("button");
  prevBtn.type = "button";
  prevBtn.className = "prev";
  prevBtn.innerText = "<";
  slider.append(prevBtn);

  const img = document.createElement("img");
  img.src = arr[count];
  img.className = "img";
  slider.append(img);

  const nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.className = "next";
  nextBtn.innerText = ">";
  slider.append(nextBtn);

  if (count === 0) {
    prevBtn.classList.add("none");
  } else {
    prevBtn.classList.remove("none");
  }

  if (count === length - 1) {
    nextBtn.classList.add("none");
  } else {
    nextBtn.classList.remove("none");
  }

  prevBtn.addEventListener("click", () => {
    count -= 1;
    if (count < 0) {
      count = 0;
    }
    render(arr);
  });

  nextBtn.addEventListener("click", () => {
    count += 1;
    if (count >= length) {
      count = length - 1;
    }
    render(arr);
  });
};

render(imgArr);
