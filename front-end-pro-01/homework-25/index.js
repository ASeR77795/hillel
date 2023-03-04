const nameInput = document.getElementById("name");
const nameError = document.getElementById("name-error");
const cityInput = document.getElementById("city");
const postOfficeInput = document.getElementById("post-office");
const postOfficeError = document.getElementById("post-office-error");
const paymentTypeInput = document.getElementById("payment-type");
const quantityInput = document.getElementById("quantity");
const commentInput = document.getElementById("comment");
const byuBtn = document.getElementById("byuBtn");
const orderList = document.getElementsByClassName("order-list");
const goodsList = document.querySelectorAll(".goods__item");
const goodsListBtn = document.querySelectorAll(".good__btn");
const form = document.querySelector(".goods__form");
const modal = document.querySelector(".modal");
const modalBox = document.querySelector(".modal-box");
let count = 0;
goodsListBtn.forEach((item) => {
  item.addEventListener("click", () => {
    form.classList.remove("active");
    count = item.dataset.number;
    goodsList.forEach((item) => {
      if (item.dataset.number === count) {
        order.item = item.dataset.item;
      }
    });
  });
});

const order = {};
const saveOrder = () => {
  order.name = nameInput.value;
  order.city = cityInput.value;
  order.postOffice = postOfficeInput.value;
  order.payment = paymentTypeInput.value;
  order.quantity = quantityInput.value;
  order.comment = commentInput.value;
  alert("Order add");
};
function isValidName(name) {
  let regex = /^[a-zA-Zа-яА-Я]+([- ]?[a-zA-Zа-яА-Я]+)*$/;
  return regex.test(name);
}
function isValidPostOffice(postOffice) {
  let npRegex = /^[0-9]{1,3}$/;
  return npRegex.test(postOffice);
}
function validateInputOnBlur(inputElement, validationFunction, errorElement) {
  inputElement.addEventListener("blur", () => {
    let inputValue = inputElement.value;
    let isValid = validationFunction(inputValue);
    if (!isValid) {
      errorElement.classList.remove("invalid");
    } else {
      errorElement.classList.add("invalid");
    }
  });
}
Object.values(order).forEach((item) => {
  const li = document.createElement("li");
  li.append(item);
  modalBox.append(li);
});
byuBtn.addEventListener("click", () => {
  saveOrder();
  modal.classList.remove("active");
  Object.values(order).forEach((item) => {
    const li = document.createElement("li");
    li.append(item);
    modalBox.append(li);
  });
});
validateInputOnBlur(nameInput, isValidName, nameError);
validateInputOnBlur(postOfficeInput, isValidPostOffice, postOfficeError);
