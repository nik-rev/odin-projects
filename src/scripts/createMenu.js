import { menuArray } from "./data";
import { importAllImages, images } from "./index";

export default function createMenuPage(parent) {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");

  h1.textContent = "Stuff we sell";
  h2.textContent = "This type of skates";

  parent.appendChild(div);
  div.appendChild(h1);
  div.appendChild(h2);

  for (const [index, item] of menuArray.entries()) {
    const temporaryArray = [];
    for (const property of item) {
      temporaryArray.push(property);
    }
    const menuItemClass = new individualMenuItem(...temporaryArray);
    menuItemClass.displayToDom(div, index + 1);
  }
}

class individualMenuItem {
  constructor(h4text, pText, price) {
    this.h4 = h4text;
    this.p = pText;
    this.price = price;
  }

  // iteration for display number
  displayToDom(parent, iteration) {
    const section = document.createElement("section");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    const price = document.createElement("h3");
    const img = document.createElement("img");

    h4.textContent = this.h4text;
    p.textContent = this.p;
    price.textContent = this.price;
    img.src = images[`skates-${iteration}.jpg`];
    img.alt = `skates-${iteration}-picture`;

    parent.appendChild(section);
    section.appendChild(h4);
    section.appendChild(p);
    section.appendChild(price);
    section.appendChild(img);
  }
}
