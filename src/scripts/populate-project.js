import domTodoCreate from "./dom-todo-create";

export default function populateDomProject(project) {
  const main = document.querySelector("main");
  const article = document.createElement("article");
  main.append(article);
  const myProj = JSON.parse(localStorage[`${project}`]);

  for (const todo of myProj) {
    domTodoCreate(article, todo["title"], todo["description"], todo["date"]);
  }
}
