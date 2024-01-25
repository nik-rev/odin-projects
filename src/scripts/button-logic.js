import destroyContent from "./destroy-content";
const mainContent = document.querySelector("main");
// destroyContent();

export default function configureButtonLogic(button) {
  button.addEventListener("click", () => {
    destroyContent(mainContent);
  });
}
