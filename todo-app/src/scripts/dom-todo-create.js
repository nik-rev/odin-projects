import { images } from "./index";
import removeTodo from "./remove-todo";
import updateProject from "./update-project";
import toggleImportant from "./toggle-important";
import updateProjectsList from "./update-projects-list";
import updateTodo from "./update-todo";
import updateDates from "./update-dates";
import toggleChecked from "./toggle-checked";

const domTodoCreate = (
  parent,
  todoTitle,
  todoDescription,
  todoDate,
  project,
  id,
  isNotProject,
  priority,
  checked
) => {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const pDescription = document.createElement("p");
  const pDate = document.createElement("p");
  const imgFavorite = document.createElement("img");
  const imgDelete = document.createElement("img");
  const imgEdit = document.createElement("img");
  const imgCheck = document.createElement("img");
  div.classList.add("todo");
  div.classList.add(`${priority}-priority`);
  h2.classList.add("title");
  pDescription.classList.add("description");
  pDate.classList.add("date");
  imgFavorite.classList.add("favorite");
  imgDelete.classList.add("delete");
  imgEdit.classList.add("edit");
  imgCheck.classList.add("check");

  imgFavorite.src = images["star-fill.svg"];
  imgCheck.src = images["checkbox-checked.svg"];

  try {
    if (JSON.parse(localStorage[`${project}`])[id]["favorite"] === false) {
      imgFavorite.src = images["star.svg"];
    }
  } catch (err) {}
  try {
    if (JSON.parse(localStorage[`${project}`])[id]["checked"] === false) {
      imgCheck.src = images["checkbox-empty.svg"];
    }
  } catch (err) {}

  imgEdit.src = images["edit.svg"];

  imgDelete.src = images["delete.svg"];

  h2.textContent = `${todoTitle}`;
  pDescription.textContent = `${todoDescription}`;
  pDate.textContent = `${todoDate}`;
  parent.prepend(div);

  if (isNotProject) {
    div.append(h2, pDescription, pDate);
  } else {
    if (checked) {
      h2.classList.add("checked");
      pDescription.classList.add("checked");
      pDate.classList.add("checked");
      div.classList.add("checked-todo");
      div.append(h2, pDescription, pDate, imgFavorite, imgCheck, imgDelete);
    } else {
      div.append(
        h2,
        pDescription,
        pDate,
        imgFavorite,
        imgCheck,
        imgEdit,
        imgDelete
      );
    }
  }

  imgDelete.addEventListener("click", () => {
    removeTodo(`${project}`, id);
    updateProjectsList();
    updateProject(project);
    updateDates();
  });
  imgFavorite.addEventListener("click", () => {
    toggleImportant(`${project}`, id);
    updateProject(project);
    updateProjectsList();
  });
  imgCheck.addEventListener("click", () => {
    toggleChecked(`${project}`, id);
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

    const inputPriority = document.createElement("div");
    const inputLow = document.createElement("input");
    const inputMid = document.createElement("input");
    const inputHigh = document.createElement("input");
    const inputLowLabel = document.createElement("p");
    const inputMidLabel = document.createElement("p");
    const inputHighLabel = document.createElement("p");

    imgEdit.id = "test";
    inputPriority.classList.add("priority-div");
    inputLow.name = "priority";
    inputMid.name = "priority";
    inputHigh.name = "priority";
    inputLow.type = "radio";
    inputMid.type = "radio";
    inputHigh.type = "radio";
    inputLow.value = "Low";
    inputMid.value = "Mid";
    inputHigh.value = "High";
    inputLowLabel.textContent = "Low";
    inputMidLabel.textContent = "Mid";
    inputHighLabel.textContent = "High";
    inputPriority.append(
      inputLow,
      inputLowLabel,
      inputMid,
      inputMidLabel,
      inputHigh,
      inputHighLabel
    );

    if (div.classList.contains("Mid-priority")) {
      inputMid.checked = true;
    } else if (div.classList.contains("High-priority")) {
      inputHigh.checked = true;
    } else {
      inputLow.checked = true;
    }

    if (div.classList.contains("Low-priority")) {
      div.classList.remove("Low-priority");
    }
    if (div.classList.contains("Mid-priority")) {
      div.classList.remove("Mid-priority");
    }
    if (div.classList.contains("High-priority")) {
      div.classList.remove("High-priority");
    }

    const inputTitle = document.createElement("input");
    const inputDescription = document.createElement("input");
    const inputDate = document.createElement("input");
    inputTitle.placeholder = "Please enter title";
    inputDescription.placeholder = "Enter description of your todo";
    inputDate.placeholder = "What was the date?";
    inputDate.type = "Date";
    inputTitle.type = "text";
    inputDescription.maxLength = "25";
    inputTitle.maxLength = "16";

    inputTitle.classList.add("title");
    inputDescription.classList.add("description");
    inputDate.classList.add("date");

    inputTitle.value = savedTitle;
    inputDescription.value = savedDescription;
    inputDate.value = savedDate;

    div.append(inputTitle, inputDescription, inputDate, inputPriority);
    imgDelete.classList.toggle("hidden");
    imgFavorite.classList.toggle("hidden");
    imgCheck.classList.toggle("hidden");

    // stays here
    imgEdit.removeEventListener("click", editState1);
    imgEdit.addEventListener("click", editState2);
    imgEdit.src = images["finished.svg"];
  }

  function editState2() {
    imgEdit.id = "";
    const inputPriority = document.querySelector(".priority-div");

    const radioButtonsArray = Array.from(
      inputPriority.querySelectorAll("input")
    );

    let checkedInput;

    for (const radioButton in radioButtonsArray) {
      if (radioButtonsArray[radioButton].checked) {
        checkedInput = radioButtonsArray[radioButton].value;
      }
    }

    div.removeChild(inputPriority);

    const inputTitle = div.querySelector(".title");
    const inputDescription = div.querySelector(".description");
    const inputDate = div.querySelector(".date");
    div.classList.add(`${checkedInput}-priority`);

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
        checkedInput
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
      imgCheck.classList.toggle("hidden");
      imgEdit.removeEventListener("click", editState2);
      imgEdit.addEventListener("click", editState1);
      updateDates();
    }
  }

  return imgEdit;
};

export default domTodoCreate;
