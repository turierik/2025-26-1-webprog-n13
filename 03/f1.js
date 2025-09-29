const fruits = [
    'ananász', 'banán', 'citrom',
    'datolya', 'eper', 'füge'
];

const ul = document.querySelector('ul');

// for (const fruit of fruits){
//     const li = document.createElement('li');
//     li.innerText = fruit;
//     ul.appendChild(li);
// }

ul.innerHTML = fruits.map(fruit => `<li>${fruit}</li>`).join('');

function handleLiClick(e){
    console.log(e);
    if (e.target.matches('li'))
        e.target.style.color = "green";
}

ul.addEventListener("click", handleLiClick);