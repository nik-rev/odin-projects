export { importAllImages, images };

function importAllCSS(r) {
  r.keys().forEach(r);
}
importAllCSS(require.context("../styles/", true, /\.css$/));

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

// other stuff

import createDomProject from "./populate-project";
import interpretData from "./data";
import { data } from "./data";
import createProjectsList from "./create-projects-list";
import allFavorite from "./all-favorite";
import domFavoriteBtn from "./dom-favorite-btn";
import domDatesBtns from "./dom-dates-btns";
import updateDates from "./update-dates";
import { themeSwitcher } from "./theme-switcher";
import openAside from "./open-aside";
import addProjectsBtn from "./add-projects-btn";

const startup = (() => {
  if (localStorage.length === 0) {
    interpretData(data);
  }
  createDomProject(allFavorite(), "in favorite");
  createProjectsList();
  addProjectsBtn();
  domFavoriteBtn();
  domDatesBtns();
  updateDates();
  themeSwitcher();
  openAside();
})();
