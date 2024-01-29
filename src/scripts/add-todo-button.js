import addTodo from "./add-todo";
import findLastEdit from "./find-last-edit";
import updateDates from "./update-dates";
import updateProject from "./update-project";
import updateProjectsList from "./update-projects-list";

export default function addTodoButton(parent, project) {
  const createButton = document.createElement("button");
  createButton.classList.add("add-todo-button");
  parent.prepend(createButton);
  createButton.textContent = "+";

  createButton.addEventListener("click", () => {
    try {
      if (Boolean(JSON.parse(localStorage[project]).at(-1)["title"])) {
        parent.removeChild(createButton);
        addTodo(`${project}`, "", "", "", "", false, false);
        updateProject(project);
        updateProjectsList();
        updateDates();
        const lastEdit = findLastEdit();
        lastEdit.click();
      } else {
        createButton.textContent = "You already have a new todo open!";
        createButton.id = "small-text";
        setTimeout(function () {
          createButton.textContent = "+";
          createButton.id = "";
        }, 1000);
      }
    } catch {
      addTodo(`${project}`, "", "", "", "", false, false);
      updateProject(project);
      updateProjectsList();
      updateDates();
      const lastEdit = findLastEdit();
      lastEdit.click();
    }
  });
}
