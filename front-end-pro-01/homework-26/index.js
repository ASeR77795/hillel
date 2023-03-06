const nameInput = document.getElementById("first-name");
const nameError = document.getElementById("name-error");
const lastNameInput = document.getElementById("last-name");
const lastNameError = document.getElementById("lastName-error");
const birthDateInput = document.getElementById("birthdate");
const dateError = document.getElementById("date-error");
const city = document.getElementById("city");
const address = document.getElementById("address");
const btn = document.getElementById("btn");
const checkBox = document.querySelectorAll(".checkbox");
const gender = document.querySelectorAll(".gender");
const table = document.getElementById("table");
const form = document.querySelector(".registration-form");
function isValidText(text) {
  let regex = /^[a-zA-Zа-яА-Я]+([- ]?[a-zA-Zа-яА-Я]+)*$/;
  return regex.test(text);
}
function isValidBirth(dateString) {
  let regex = /^\d{2}\.\d{2}\.\d{4}$/;
  return regex.test(dateString);
}
function validateInputOnBlur(inputElement, validationFunction, errorElement) {
  inputElement.addEventListener("blur", () => {
    let inputValue = inputElement.value;
    let isValid = validationFunction(inputValue);
    if (isValid) {
      errorElement.classList.add("invalid");
    } else {
      errorElement.classList.remove("invalid");
    }
  });
}
checkBox.forEach((item) => {
  if (item.checked) {
    data.language = item.value;
  }
});
const data = {};
function saveForm() {
  data.name = nameInput.value;
  data.lastName = lastNameInput.value;
  data.birthDate = birthDateInput.value;
  data.city = city.value;
  data.address = address.value;
  data.language = [];
  checkBox.forEach((item) => {
    if (item.checked) {
      data.language.push(item.value);
    }
  });
  gender.forEach((item) => {
    if (item.checked) {
      data.gender = item.value;
    }
  });
}
btn.addEventListener("click", () => {
  event.preventDefault();
  saveForm();
  console.log(data);
  renderData();
  form.classList.add("hide");
  table.classList.remove("hide");
});
function renderData() {
  const entries = Object.entries(data);
  entries.forEach((item) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    table.append(tr);
    tr.append(td);
    td.innerText = item[0];
    const td2 = document.createElement("td");
    tr.append(td2);
    td2.innerText = item[1];
  });
}
validateInputOnBlur(nameInput, isValidText, nameError);
validateInputOnBlur(lastNameInput, isValidText, lastNameError);
validateInputOnBlur(birthDateInput, isValidBirth, dateError);
