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

const schedule = {
  Monday: [8, 8],
  Tuesday: [8, 8],
  Wednesday: [8, 8],
  Thursday: [8, 8],
  Friday: [8, 12],
  Saturday: [8, 10],
};

import createHours from "./create-hours";
// import { schedule } from "./schedule.js";

export default function createHome(parent) {
  // main setup
  const div = document.createElement("div");
  parent.appendChild(div);
  // heading
  const h1 = document.createElement("h1");
  div.appendChild(h1);
  h1.textContent = "Ice Skating Shop";
  // owner section
  const ownerSection = document.createElement("section");
  div.appendChild(ownerSection);
  const h4 = document.createElement("h4");
  h4.textContent = "Our owner";
  ownerSection.appendChild(h4);
  const p = document.createElement("p");
  ownerSection.appendChild(p);
  p.textContent = `This guy owns the business, he's the cool guy , he made a lot of
  money selling ice skating things to others. He is awesome. Just look
  at him. He makes lots of money and he made this business.`;
  const img = document.createElement("img");
  img.src = images["author.jpg"];
  // img.setAttribute("src", "../src/assets/img/author.jpg");
  img.setAttribute("alt", "author");
  ownerSection.appendChild(img);
  // schedule section
  createHours(div, schedule);
  // location
  const locationSection = document.createElement("section");
  div.appendChild(locationSection);
  const h4location = document.createElement("h4");
  locationSection.appendChild(h4location);
  h4location.textContent = "Location";
  const locationImg = document.createElement("img");
  locationSection.appendChild(locationImg);
  locationImg.src = images["map.png"];
  locationImg.setAttribute("alt", "location");
}
