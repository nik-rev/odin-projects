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

const menuArray = [
  [
    `Yeah this one`,
    `This skate is really good its awesome its great and you should buy it, use it, its gonna last a while for you`,
    `£500`,
  ],
  [
    `Awesome Skateboard`,
    `This skateboard is perfect for street tricks and smooth rides. It's a must-have for any skateboard enthusiast. Grab yours today!`,
    `£150`,
  ],
  [
    `High-Performance Rollerblades`,
    `These rollerblades are designed for speed and agility. Whether you're a beginner or a pro, these will take your skating to the next level.`,
    `£250`,
  ],
  [
    `Stylish Longboard`,
    `Cruise the streets in style with this sleek longboard. It's not just a mode of transport; it's a statement of your unique style.`,
    `£180`,
  ],
  [
    `Classic Inline Skates`,
    `These inline skates offer a classic design with modern comfort. Get ready to roll and enjoy hours of skating fun.`,
    `£120`,
  ],
  [
    `Retro Quad Skates`,
    `Step back in time with these retro quad skates. They combine nostalgia with top-notch performance for an unforgettable skating experience.`,
    `£160`,
  ],
  [
    `Professional Freestyle Skateboard`,
    `Take your skateboarding skills to new heights with this professional freestyle skateboard. It's built for tricks and stunts.`,
    `£200`,
  ],
  [
    `Speedy Electric Skateboard`,
    `Get ready to zip around town with this electric skateboard. It offers speed and convenience for your daily commute or leisure rides.`,
    `£350`,
  ],
];

export default function createMenuPage(parent) {
  const div = document.createElement("div");
  parent.appendChild(div);
  // h1
  const h1 = document.createElement("h1");
  div.appendChild(h1);
  h1.textContent = "Stuff we sell";
  const h2 = document.createElement("h2");
  div.appendChild(h2);
  h2.textContent = "This type of skates";

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
    parent.appendChild(section);
    const h4 = document.createElement("h4");
    h4.textContent = this.h4text;
    const p = document.createElement("p");
    p.textContent = this.p;
    const price = document.createElement("h3");
    price.textContent = this.price;
    // image
    const img = document.createElement("img");
    img.src = images[`skates-${iteration}.jpg`];
    img.alt = `skates-${iteration}-picture`;
    section.appendChild(h4);
    section.appendChild(p);
    section.appendChild(price);
    section.appendChild(img);
  }
}
