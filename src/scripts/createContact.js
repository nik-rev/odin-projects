import { contactsArray } from "./data";
import { importAllImages, images } from "./index";

export default function createContactPage(parent) {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");

  h1.textContent = "Contact us";

  parent.append(div);
  div.append(h1);

  for (const contact of contactsArray) {
    const temporaryArray = [];
    for (const detail of contact) {
      temporaryArray.push(detail);
    }
    const contactClass = new individualContact(...temporaryArray);
    contactClass.displayToDom(div);
  }
}

class individualContact {
  constructor(h4text, imgAlt, tel, email) {
    this.h4 = h4text;
    this.imgAlt = imgAlt;
    this.tel = tel;
    this.email = email;
  }

  displayToDom(parent) {
    const section = document.createElement("section");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");
    const tel = document.createElement("p");
    const email = document.createElement("p");

    h4.textContent = this.h4text;
    img.src = images["author.jpg"];
    img.alt = this.imgAlt;
    tel.textContent = this.tel;
    email.textContent = this.email;

    parent.appendChild(section);
    section.append(h4, img, tel, email);
  }
}
