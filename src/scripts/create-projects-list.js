import updateProject from "./update-project";

export default function createProjectsList() {
  // const projectNames = document.querySelector("#project-names");
  // for (const key of Object.keys(localStorage)) {
  //   const div = document.createElement("div");
  //   const button = document.createElement("button");
  //   const p = document.createElement("p");
  //   button.class = "project";
  //   p.class = `tasks-count-key`;
  //   projectNames.append(div);
  //   div.append(button, p);
  //   button.textContent = "key";
  //   p.textContent = `2`;

  //   button.addEventListener("click", () => {
  //     console.log("key");
  //   });
  // }

  const projectNames = document.querySelector("#project-names");
  for (const key of Object.keys(localStorage)) {
    const div = document.createElement("div");
    div.classList.add("project-name");
    const button = document.createElement("button");
    const p = document.createElement("p");
    button.class = "project";
    p.class = `tasks-count-${key}`;
    projectNames.append(div);
    div.append(button, p);
    button.textContent = key;
    p.textContent = `2`;

    button.addEventListener("click", () => {
      updateProject(`${key}`);
    });
  }
}
