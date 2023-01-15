const div = document.querySelector("div");

const h1 = document.getElementsByTagName("h1")[0]
h1.style.color = "#2cb978"

const p = document.createElement("p");
const textNode = document.createTextNode("I have nothing to do today.");
p.textContent = textNode.textContent;

div.appendChild(p);
