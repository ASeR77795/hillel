// Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.

const button = document.querySelectorAll("button");
const p = document.querySelectorAll("p");

const renderVote = (elems, func) => {
  elems.forEach((element) => {
    element.addEventListener("click", (event) => {
      const btn = event.target.closest("button");
      const p = btn.querySelector("p");
      p.classList.remove("none");
      let count = parseInt(p.innerText);
      p.innerText = count + 1;
    });
  });
};

renderVote(button);
