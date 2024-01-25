import destroyContent from "./destroy-content";
import createHome from "./createHome.js";
const mainContent = document.querySelector("main");

export default function configureButtonLogic(button) {
  button.addEventListener("click", () => {
    destroyContent(mainContent);
    create[`${button.textContent}`](mainContent);
  });
}
