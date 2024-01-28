import addTodo from "./add-todo";
import domTodoCreate from "./dom-todo-create";
import findLastEdit from "./find-last-edit";
import populateDomProject from "./populate-project";
import updateProject from "./update-project";
import updateProjectsList from "./update-projects-list";
import validateTodos from "./validate-todo";

export default function addTodoButton(parent, project) {
  const createButton = document.createElement("button");
  createButton.classList.add("add-todo-button");
  parent.prepend(createButton);
  createButton.textContent = "+";

  createButton.addEventListener("click", () => {
    parent.removeChild(createButton);
    addTodo(`${project}`, "", "", "", "blue", false);
    updateProject(project);
    updateProjectsList();
    const lastEdit = findLastEdit();
    lastEdit.click();
    validateTodos();
  });
}
