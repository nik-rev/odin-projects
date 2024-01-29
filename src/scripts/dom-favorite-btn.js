import allFavorite from "./all-favorite";
import toggleAsideArticleClasses from "./toggle-aside-article-classes";
import updateProject from "./update-project";

export default function domFavoriteBtn() {
  const favoriteBtn = document.querySelector(".favorite");
  favoriteBtn.addEventListener("click", () => {
    updateProject(allFavorite(), "in favorite");
    toggleAsideArticleClasses();
  });
}
