export default function removeProjectsList() {
  const projectNames = document.querySelector("#project-names");
  const favoriteCounter = document.querySelector(".favorite-counter");
  const favoriteDiv = document.querySelector("#favorite-div");
  const projectNameArray = Array.from(
    document.querySelectorAll(".project-name")
  );
  for (const node of projectNameArray) {
    projectNames.removeChild(node);
  }
  favoriteDiv.removeChild(favoriteCounter);
}
