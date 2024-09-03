const search = document.createElement("input");

search.style.position = "absolute";
search.style.width = "80%";
search.style.top = "50px";
search.style.left = "10%";
search.style.right = "10%";

document.body.appendChild(search);

// search.style.display = "none";

const toggleDisplay = () => {
  search.style.display = search.style.display === "none" ? "" : "none";
};

document.body.addEventListener("keydown", (e) => {
  if (e.altKey && e.key === ".") {
    toggleDisplay();
  }
});
