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
import addProject from "./add-project";
import allFavorite from "./all-favorite";
import domFavoriteBtn from "./dom-favorite-btn";
import domDatesBtns from "./dom-dates-btns";
import updateDates from "./update-dates";
import { themeSwitcher } from "./theme-switcher";
import openAside from "./open-aside";
import toggleAsideArticleClasses from "./toggle-aside-article-classes";

if (localStorage.length === 0) {
  interpretData(data);
}

createDomProject(allFavorite(), "in favorite");
createProjectsList();

const addProjectsBtn = document.querySelector(".add-project");

addProjectsBtn.addEventListener("click", () => {
  let userInput = prompt("What do you want to call the new project?");
  const projectsList = [];
  for (const key of Object.keys(localStorage)) {
    projectsList.push(key.toLowerCase());
  }
  if (userInput === null) userInput = "";
  if (projectsList.includes(userInput.toLowerCase())) {
    alert("You already have a project of the same name!");
  } else if (Boolean(userInput)) {
    addProject(userInput);
    toggleAsideArticleClasses();
  } else {
    alert("Please enter a valid project name!");
  }
});

domFavoriteBtn();
domDatesBtns();
updateDates();
themeSwitcher();
openAside();
