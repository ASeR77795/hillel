const buttonFalse = document.querySelector(".false a");
const buttonTrue = document.querySelector(".true a");

function checkProtocol(url) {
  const pattern = /^((http|https):\/\/)/i;
  if (!pattern.test(url)) {
    url = "http://" + url;
  }
  return url;
}

const checkLink = (button, func) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const url = button.getAttribute("href");
    console.log(url);
    const checkedUrl = func(url);
    console.log(checkedUrl);
  });
};

checkLink(buttonFalse, checkProtocol);
checkLink(buttonTrue, checkProtocol);
