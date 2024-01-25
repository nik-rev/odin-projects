function importAllImages(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAllImages(
  require.context("../assets/img/", false, /\.(png|svg|jpe?g|gif)$/)
);

const contactsArray = [
  [
    "Super cool dude who's manager",
    "manager",
    "7482-2432-234",
    "lookatthisdude@gmail.com",
  ],
  [
    "Efficient Team Leader",
    "project coordinator",
    "5634-7893-123",
    "leadwithvision@example.com",
  ],
  [
    "Innovative Tech Specialist",
    "it consultant",
    "9234-5678-456",
    "techwizard@example.com",
  ],
  [
    "Creative Marketing Guru",
    "brand strategist",
    "8123-4567-890",
    "marketmaster@example.com",
  ],
];

export default function createContactPage(parent) {
  const div = document.createElement("div");
  parent.appendChild(div);
  // h1
  const h1 = document.createElement("h1");
  div.appendChild(h1);
  h1.textContent = "Contact us";

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
    parent.appendChild(section);
    const h4 = document.createElement("h4");
    h4.textContent = this.h4text;
    const img = document.createElement("img");
    img.src = images["author.jpg"];
    img.alt = this.imgAlt;
    const tel = document.createElement("p");
    tel.textContent = this.tel;
    const email = document.createElement("p");
    email.textContent = this.email;

    // actually display
    section.appendChild(h4);
    section.appendChild(img);
    section.appendChild(tel);
    section.appendChild(email);
  }
}
