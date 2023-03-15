// Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.

const buttons = document.querySelectorAll("button");
const paragraphs = document.querySelectorAll("p");
const doSmth = (event) => {
  const btn = event.target.closest("button");
  const paragraph = btn.querySelector("p");
  paragraph.classList.remove("none");
  let count = parseInt(paragraph.innerText);
  paragraph.innerText = count + 1;
};

buttons.forEach((elem) => {
  elem.onclick = doSmth;
});
