import { images } from "./index";
import removeTodo from "./remove-todo";
import updateProject from "./update-project";
import toggleImportant from "./toggle-important";
import updateProjectsList from "./update-projects-list";
import updateTodo from "./update-todo";
import { format, toDate } from "date-fns";
import validateTodos from "./validate-todo";

const domTodoCreate = (
  parent,
  todoTitle,
  todoDescription,
  todoDate,
  project,
  id,
  isNotProject
) => {
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

  try {
    if (JSON.parse(localStorage[`${project}`])[id]["favorite"] === false) {
      imgFavorite.src = images["star.svg"];
    }
  } catch (err) {}

  imgEdit.src = images["edit.svg"];

  imgDelete.src = images["delete.svg"];

  h2.textContent = `${todoTitle}`;
  pDescription.textContent = `${todoDescription}`;
  pDate.textContent = `${todoDate}`;
  // format(inputDate.value, "Due MMMM Qo")
  parent.prepend(div);

  console.log(isNotProject);
  if (isNotProject) {
    div.append(h2, pDescription, pDate);
  } else {
    div.append(h2, pDescription, pDate, imgFavorite, imgEdit, imgDelete);
  }

  imgDelete.addEventListener("click", () => {
    removeTodo(`${project}`, id);
    updateProjectsList();
    updateProject(project);
  });
  imgFavorite.addEventListener("click", () => {
    toggleImportant(`${project}`, id);
    updateProject(project);
    updateProjectsList();
  });
  imgEdit.addEventListener("click", editState1);

  function editState1() {
    // reload page before state 2 is active
    const h2 = div.querySelector("h2");
    const pDescription = div.querySelector("p.description");
    const pDate = div.querySelector("p.date");
    const savedTitle = h2.textContent;
    const savedDescription = pDescription.textContent;
    const savedDate = pDate.textContent;

    div.removeChild(h2);
    div.removeChild(pDescription);
    div.removeChild(pDate);

    const inputTitle = document.createElement("input");
    const inputDescription = document.createElement("input");
    const inputDate = document.createElement("input");
    inputTitle.placeholder = "Please enter title";
    inputDescription.placeholder = "Enter description of your todo";
    inputDate.placeholder = "What was the date?";
    inputDate.type = "Date";

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
    console.log("Hello");
    const inputTitle = div.querySelector(".title");
    const inputDescription = div.querySelector(".description");
    const inputDate = div.querySelector(".date");

    if (inputTitle.value === "") {
      const temporary = inputDescription.value;
      inputDescription.value = "";
      inputDescription.placeholder = "Please enter a title";
      inputDescription.classList.toggle("red-text");
      setTimeout(() => {
        inputDescription.classList.toggle("red-text");
        inputDescription.value = temporary;
      }, 2000);
    } else if (inputDescription.value === "") {
      const temporary = inputDescription.value;
      inputDescription.value = "";
      inputDescription.placeholder = "Please enter a description";
      inputDescription.classList.toggle("red-text");
      setTimeout(() => {
        inputDescription.classList.toggle("red-text");
        inputDescription.value = temporary;
      }, 2000);
    } else if (inputDate.value === "") {
      const temporary = inputDescription.value;
      inputDescription.value = "";
      inputDescription.placeholder = "Please enter a date";
      inputDescription.classList.toggle("red-text");
      setTimeout(() => {
        inputDescription.classList.toggle("red-text");
        inputDescription.value = temporary;
      }, 2000);
    } else {
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

      console.log(div, inputTitle, inputDescription, inputDate);

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

  return imgEdit;
};

export default domTodoCreate;
