const div = document.querySelector("div");

const p = document.createElement("p");
const textNode = document.createTextNode("I have nothing to do today.");
p.textContent = textNode.textContent;

div.appendChild(p);
