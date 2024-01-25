import destroyContent from "./destroy-content";
import createHome from "./createHome.js";
import createContact from "./createContact.js";
import createMenu from "./createMenu.js";
const mainContent = document.querySelector("main");

export default function configureButtonLogic(button) {
  button.addEventListener("click", () => {
    destroyContent(mainContent);
    switch (button.textContent) {
      case "Home":
        createHome(mainContent);
        break;
      case "Menu":
        createMenu(mainContent);
        break;
      case "Contact":
        createContact(mainContent);
        break;
    }
  });
}
