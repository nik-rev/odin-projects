import addTodoButton from "./add-todo-button";
import domTodoCreate from "./dom-todo-create";
import updateProjectsList from "./update-projects-list";

export default function populateDomProject(project, state) {
  const main = document.querySelector("main");
  const article = document.createElement("article");
  main.append(article);
  let myProj;
  let isNotProject = false;
  try {
    myProj = JSON.parse(localStorage[`${project}`]);
  } catch (err) {
    myProj = JSON.parse(project);
    isNotProject = true;
  }

  let i = 0;

  if (myProj.length === 0) {
    const main = document.querySelector("main");
    const article = document.querySelector("article");
    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.classList.add("delete-project");

    if (!isNotProject) {
      deleteProjectButton.textContent = "delete project";
      article.append(deleteProjectButton);
      deleteProjectButton.addEventListener("click", () => {
        localStorage.removeItem(project);
        updateProjectsList();
        main.removeChild(article);
        populateDomProject("events");
      });
    } else {
      deleteProjectButton.textContent = `Looks like you have nothing set for ${state.toLowerCase()}!`;
      article.append(deleteProjectButton);
    }
  }

  for (const todo of myProj) {
    domTodoCreate(
      article,
      todo["title"],
      todo["description"],
      todo["date"],
      project,
      i,
      isNotProject,
      todo["priority"],
      todo["checked"]
    );

    i++;
  }
  if (!isNotProject) {
    addTodoButton(article, project);
  }
}
