const arr = [1, 2, 3, [1.1, 1.2, 1.3], 4, 5, [6.1, 6.2, 6.3]];
const box = document.querySelector(".box");

function createList(arr) {
  const ul = document.createElement("ul");

  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");

    if (Array.isArray(arr[i])) {
      const nestedUl = createList(arr[i]);
      li.appendChild(nestedUl);
    } else {
      li.textContent = arr[i];
    }

    ul.appendChild(li);
  }

  return ul;
}

const list = createList(arr);
box.appendChild(list);
