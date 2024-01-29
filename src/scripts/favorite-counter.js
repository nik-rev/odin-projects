import allFavorite from "./all-favorite";

export default function createFavoriteCounter() {
  const favoriteCounter = document.createElement("p");
  favoriteCounter.classList.add("favorite-counter");
  const favoriteDiv = document.querySelector("#favorite-div");
  favoriteDiv.append(favoriteCounter);
  favoriteCounter.textContent = JSON.parse(allFavorite()).length;
}
