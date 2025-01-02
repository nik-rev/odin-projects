import createHome from "./createHome.js";
import { createHeader } from "./header.js";
import createFooter from "./footer.js";
export { importAllImages, images };
export { mainContent };

// CSS Files
function importAllCSS(r) {
  r.keys().forEach(r);
}
importAllCSS(require.context("../styles/", true, /\.css$/));

// Images
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

const body = document.querySelector("body");
const mainContent = document.querySelector("main");

const startUp = (() => {
  createFooter("Copyright 2053 The Skating Company", body);
  createHeader(body, ["Home", "Menu", "Contact"]);
  createHome(mainContent);
})();
