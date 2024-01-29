import addProject from "./add-project";
import toggleAsideArticleClasses from "./toggle-aside-article-classes";

export default function addProjectsBtn() {
  const addProjectsBtn = document.querySelector(".add-project");

  addProjectsBtn.addEventListener("click", () => {
    let userInput = prompt("What do you want to call the new project?");
    const projectsList = [];
    for (const key of Object.keys(localStorage)) {
      projectsList.push(key.toLowerCase());
    }
    if (userInput === null) userInput = "";
    if (projectsList.includes(userInput.toLowerCase())) {
      alert("You already have a project of the same name!");
    } else if (Boolean(userInput)) {
      addProject(userInput);
      toggleAsideArticleClasses();
    } else {
      alert("Please enter a valid project name!");
    }
  });
}
