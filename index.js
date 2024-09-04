const search = document.createElement("input");

function onError(error) {
  console.log(`Error: ${error}`);
}

function onGot(item) {
  console.log(item)
  let color = "blue";
  if (item.color) {
    color = item.color;
  }
  document.body.style.border = `10px solid ${color}`;
}

const getting = browser.storage.sync.get("color");
getting.then(onGot, onError);

search.style.position = "absolute";
search.style.zIndex = "10000000000";
search.style.fontFamily = "monospace";
search.style.width = "80%";
search.style.top = "50px";
search.style.left = "10%";
search.style.right = "10%";
search.style.color = "#4c4f69";
search.style.backgroundColor = "#eff1f5";
search.style.border = "none";
search.style.outline = "none";
search.style.padding = "1rem";

document.body.appendChild(search);

const toggleDisplay = () => {
  search.style.display = search.style.display === "none" ? "" : "none";
  if (search.style.display === "") {
    search.focus();
  } else {
    search.value = "";
  }
};

document.body.addEventListener("keydown", (e) => {
  if (e.altKey && e.key === ".") {
    toggleDisplay();
  }
});

search.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    toggleDisplay();
  }
});
