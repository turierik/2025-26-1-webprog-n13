const paragraph = document.querySelector("p");
paragraph.innerText = "Át<i>ír</i>tam!"; // nem eszi meg a formázást
paragraph.innerHTML = "Át<i>ír</i>tam!"; // így már igen :)

const title = document.querySelector("h1"); // mindig az első illeszkedő elemet találja meg
title.innerText = "Valami";

const titles = document.querySelectorAll("h1"); // NodeList
for (const t of titles) // végig kell rajta iterálni persze
    t.innerText = "Mindet átírtam!";

// CSS --> background-color: yellow
// JS  --> backgroundColor = "yellow"
paragraph.style.backgroundColor = "yellow";
paragraph.style.color = "rgb(50 150 100)";
paragraph.style.border = "3px solid purple";

const img = document.querySelector("img");
img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Iceland-1979445_%28cropped_3%29.jpg/970px-Iceland-1979445_%28cropped_3%29.jpg";