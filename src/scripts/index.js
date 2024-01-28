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

import addTodo from "./add-todo";
import removeTodo from "./remove-todo";
import toggleImportant from "./toggle-important";
import updateTodo from "./update-todo";
import domTodoCreate from "./dom-todo-create";
import createDomProject from "./populate-project";
import interpretData from "./data";
import { data } from "./data";
import clearProject from "./clear-project";
import updateProject from "./update-project";
import populateDomProject from "./populate-project";
import createProjectsList from "./create-projects-list";
import addProject from "./add-project";
import validateTodos from "./validate-todo";
// createDomProject("a");

// updateProject();

// interpretData(data);

populateDomProject("events");
createProjectsList();

const addProjectsBtn = document.querySelector(".add-project");

addProjectsBtn.addEventListener("click", () => {
  const userInput = prompt("What do you want to call the new project?");
  const projectsList = [];
  for (const key of Object.keys(localStorage)) {
    projectsList.push(key.toLowerCase());
  }

  if (projectsList.includes(userInput.toLowerCase())) {
    alert("You already have a project of the same name!");
  } else if (Boolean(userInput)) {
    addProject(userInput);
  } else {
    alert("Please enter a valid project name!");
  }
});
