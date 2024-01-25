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

// DOM CREATION

const body = document.querySelector("body");
const mainContent = document.querySelector("main");

import createFooter from "./footer.js";
createFooter("Copyright 2053 The Skating Company", body);

import { createHeader } from "./header.js";
createHeader(body, ["Home", "Menu", "Contact"]);

import createHome from "./createHome.js";
createHome(mainContent);
