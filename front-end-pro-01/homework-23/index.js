const elem = document.querySelector(".container");
function createTable(parent, cols, rows) {
  const table = document.createElement("table");
  let val = 1;
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      tr.appendChild(td);
      td.append(val);
      val++;
    }
    table.appendChild(tr);
  }
  parent.appendChild(table);
}
createTable(elem, 5, 5);
