import allFavorite from "./all-favorite";
import populateDomProject from "./populate-project";
import updateProject from "./update-project";

export default function domFavoriteBtn() {
  const favoriteBtn = document.querySelector(".favorite");
  favoriteBtn.addEventListener("click", () => {
    updateProject(allFavorite(), "in favorite");
  });
}
