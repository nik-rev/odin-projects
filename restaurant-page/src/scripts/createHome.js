import { schedule } from "./data";
import { importAllImages, images } from "./index";
import createHours from "./create-hours";

export default function createHome(parent) {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  const img = document.createElement("img");
  const locationSection = document.createElement("section");
  const h4location = document.createElement("h4");
  const locationImg = document.createElement("img");
  const ownerSection = document.createElement("section");

  h1.textContent = "Ice Skating Shop";
  h4.textContent = "Our owner";
  p.textContent = `This guy owns the business, he's the cool guy , he made a lot of
  money selling ice skating things to others. He is awesome. Just look
  at him. He makes lots of money and he made this business.`;
  h4location.textContent = "Location";
  img.src = images["author.jpg"];
  locationImg.src = images["map.png"];
  img.alt = "author";
  locationImg.alt = "location";

  div.append(h1, ownerSection, createHours(schedule), locationSection);
  parent.append(div);
  ownerSection.append(h4, p, img);
  locationSection.append(h4location, locationImg);
}
