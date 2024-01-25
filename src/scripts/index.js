// CSS Files
function importAllCSS(r) {
  r.keys().forEach(r);
}
importAllCSS(require.context("../styles/", true, /\.css$/));

// Images
function importAllImages(r) {
  r.keys().forEach(r);
}
importAllImages(
  require.context("../assets/img/", false, /\.(png|svg|jpe?g|gif)$/)
);

// DOM CREATION

const body = document.querySelector("body");

import createFooter from "./footer.js";
createFooter("Copyright 2053 The Skating Company", body);

import { createHeader } from "./header.js";
import configureButtonsLogic from "./nav-bar-logic.js";
configureButtonsLogic(createHeader(body));
