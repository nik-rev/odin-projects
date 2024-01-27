import { images } from "./index";
import removeTodo from "./remove-todo";
import updateProject from "./update-project";
import toggleImportant from "./toggle-important";
import updateProjectsList from "./update-projects-list";
import updateTodo from "./update-todo";

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
  const imgEdit = document.createElement("img");
  div.classList.add("todo");
  h2.classList.add("title");
  pDescription.classList.add("description");
  pDate.classList.add("date");
  imgFavorite.classList.add("favorite");
  imgDelete.classList.add("delete");
  imgEdit.classList.add("edit");

  imgFavorite.src = images["star-fill.svg"];
  if (JSON.parse(localStorage[`${project}`])[id]["favorite"] === false) {
    imgFavorite.src = images["star.svg"];
  }

  imgEdit.src = images["edit.svg"];

  imgDelete.src = images["delete.svg"];

  h2.textContent = `${todoTitle}`;
  pDescription.textContent = `${todoDescription}`;
  pDate.textContent = `${todoDate}`;
  parent.appendChild(div);
  div.append(h2, pDescription, pDate, imgFavorite, imgEdit, imgDelete);

  imgDelete.addEventListener("click", () => {
    removeTodo(`${project}`, id);
    updateProjectsList();
    updateProject(project);
  });
  imgFavorite.addEventListener("click", () => {
    toggleImportant(`${project}`, id);
    updateProject(project);
  });
  imgEdit.addEventListener("click", editState1);

  function editState1() {
    const savedTitle = h2.textContent;
    const savedDescription = pDescription.textContent;
    const savedDate = pDate.textContent;

    div.removeChild(h2);
    div.removeChild(pDescription);
    div.removeChild(pDate);

    const inputTitle = document.createElement("input");
    const inputDescription = document.createElement("input");
    const inputDate = document.createElement("input");

    inputTitle.classList.add("title");
    inputDescription.classList.add("description");
    inputDate.classList.add("date");

    inputTitle.value = savedTitle;
    inputDescription.value = savedDescription;
    inputDate.value = savedDate;

    div.append(inputTitle, inputDescription, inputDate);

    imgEdit.src = images["finished.svg"];
    imgDelete.classList.toggle("hidden");
    imgFavorite.classList.toggle("hidden");
    imgEdit.removeEventListener("click", editState1);
    imgEdit.addEventListener("click", editState2);
  }

  function editState2() {
    const inputTitle = document.querySelector(".title");
    const inputDescription = document.querySelector(".description");
    const inputDate = document.querySelector(".date");

    updateTodo(
      project,
      id,
      inputTitle.value,
      inputDescription.value,
      inputDate.value,
      "blue"
    );

    const h2 = document.createElement("h2");
    const pDescription = document.createElement("p");
    const pDate = document.createElement("p");

    h2.textContent = inputTitle.value;
    pDescription.textContent = inputDescription.value;
    pDate.textContent = inputDate.value;

    h2.classList.add("title");
    pDescription.classList.add("description");
    pDate.classList.add("date");

    div.removeChild(inputTitle);
    div.removeChild(inputDescription);
    div.removeChild(inputDate);
    div.append(h2, pDescription, pDate);

    imgEdit.src = images["edit.svg"];
    imgDelete.classList.toggle("hidden");
    imgFavorite.classList.toggle("hidden");
    imgEdit.removeEventListener("click", editState2);
    imgEdit.addEventListener("click", editState1);
  }
}
