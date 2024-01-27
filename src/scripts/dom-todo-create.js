import { images } from "./index";
import removeTodo from "./remove-todo";
import updateProject from "./update-project";
import toggleImportant from "./toggle-important";

export default function domTodoCreate(
  parent,
  todoTitle,
  todoDescription,
  todoDate,
  project,
  id
) {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const pDescription = document.createElement("p");
  const pDate = document.createElement("p");
  const imgFavorite = document.createElement("img");
  const imgDelete = document.createElement("img");
  div.classList.add("todo");
  h2.classList.add("title");
  pDescription.classList.add("description");
  pDate.classList.add("date");
  imgFavorite.classList.add("favorite");
  imgDelete.classList.add("delete");

  imgFavorite.src = images["star-fill.svg"];
  if (JSON.parse(localStorage[`${project}`])[id]["favorite"] === false) {
    imgFavorite.src = images["star.svg"];
  }

  imgDelete.src = images["delete.svg"];

  h2.textContent = `${todoTitle}`;
  pDescription.textContent = `${todoDescription}`;
  pDate.textContent = `${todoDate}`;
  parent.appendChild(div);
  div.append(h2, pDescription, pDate, imgFavorite, imgDelete);

  imgDelete.addEventListener("click", () => {
    console.log("hello", project, id);
    removeTodo(`${project}`, id);
    updateProject(project);
  });
  imgFavorite.addEventListener("click", () => {
    console.log("hello", project, id);
    toggleImportant(`${project}`, id);
    updateProject(project);
  });
}
