const matrix = [
    [ 455, 123, 2, 56 ],
    [ 221, 67, 120, 4 ],
    [ 111, 87, 9, 12  ]
];

// 1. generálj egy táblázatot a mátrixból
const table = document.querySelector('table');
// for (const row of matrix){
//     const tr = document.createElement('tr');
//     for (const cell of row){
//         const td = document.createElement('td');
//         td.innerText = cell;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

table.innerHTML = matrix.map(row => `<tr>${
    row.map(cell => `<td>${cell}</td>`).join('')
}</tr>`).join('');

// 2. ha egy cellára kattintok, duplázódjon meg a cellába
// írt szám a táblázatban
function handleTdClick(e){
    if (e.target.matches('td'))
        e.target.innerText = e.target.innerText * 2;
}
table.addEventListener("click", handleTdClick);

// 3. ha rámutatok egy sorra (mouseover esemény), akkor
// színezd be a sor hátterét (lejövetel: mouseout)

function delegate(parent, type, selector, handler) {
  parent.addEventListener(type, function (event) {
    const targetElement = event.target.closest(selector);

    if (this.contains(targetElement)) {
      handler.call(targetElement, event);
    }
  });
}

delegate(table, "mouseover", "tr", function(){
    this.style.backgroundColor = "yellow";
});

delegate(table, "mouseout", "tr", function(){
    this.style.backgroundColor = "";
});