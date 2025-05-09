import allToday from "./all-today";
import toggleAsideArticleClasses from "./toggle-aside-article-classes";
import updateProject from "./update-project";

export default function domDatesBtns() {
  const datesBtnsArray = Array.from(document.querySelectorAll(".dates button"));

  for (let i = 0; i < 4; i++) {
    datesBtnsArray[i].addEventListener("click", () => {
      updateProject(
        JSON.stringify(allToday()[i]),
        datesBtnsArray[i].textContent
      );
      toggleAsideArticleClasses();
    });
  }
}
