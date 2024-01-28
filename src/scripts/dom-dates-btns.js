import allFavorite from "./all-favorite";
import allToday from "./all-today";
import populateDomProject from "./populate-project";
import toggleAsideArticleClasses from "./toggle-aside-article-classes";
import updateProject from "./update-project";

export default function domDatesBtns() {
  const datesBtnsArray = Array.from(document.querySelectorAll(".dates button"));
  datesBtnsArray[0].addEventListener("click", () => {
    updateProject(JSON.stringify(allToday()[0]), datesBtnsArray[0].textContent);
    toggleAsideArticleClasses();
  });
  datesBtnsArray[1].addEventListener("click", () => {
    updateProject(JSON.stringify(allToday()[1]), datesBtnsArray[1].textContent);
    toggleAsideArticleClasses();
  });
  datesBtnsArray[2].addEventListener("click", () => {
    updateProject(JSON.stringify(allToday()[2]), datesBtnsArray[2].textContent);
    toggleAsideArticleClasses();
  });
  datesBtnsArray[3].addEventListener("click", () => {
    updateProject(JSON.stringify(allToday()[3]), datesBtnsArray[3].textContent);
    toggleAsideArticleClasses();
  });
}
