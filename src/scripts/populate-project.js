import addTodoButton from "./add-todo-button";
import domTodoCreate from "./dom-todo-create";
import updateProjectsList from "./update-projects-list";
import validateTodos from "./validate-todo";

export default function populateDomProject(project) {
  const main = document.querySelector("main");
  const article = document.createElement("article");
  main.append(article);
  const myProj = JSON.parse(localStorage[`${project}`]);

  let i = 0;

  if (myProj.length === 0) {
    const main = document.querySelector("main");
    const article = document.querySelector("article");
    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.classList.add("delete-project");
    deleteProjectButton.textContent = "delete project";
    article.append(deleteProjectButton);
    deleteProjectButton.addEventListener("click", () => {
      localStorage.removeItem(project);
      updateProjectsList();
      main.removeChild(article);
      populateDomProject("events");
    });
  }

  for (const todo of myProj) {
    domTodoCreate(
      article,
      todo["title"],
      todo["description"],
      todo["date"],
      project,
      i
    );

    i++;
  }
  addTodoButton(article, project);
}
