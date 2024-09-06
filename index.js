const search = document.createElement("input");

const isEmptyObject = (object) => Object.keys(object).length === 0;

let instantMacros, searchMacros;

const defaultOptions = {
  instantMacros: {
    ".g": "https://www.github.com/",
    ".y": "https://www.youtube.com/",
    ".p": "https://www.pass.proton.me",
    ".m": "https://www.mail.proton.me",
    ".d": "https://www.drive.proton.me",
    ".h": "https://news.ycombinator.com/",
    ".a": "https://claude.ai/new",
  },
  searchMacros: {
    "?y": "https://www.youtube.com/results?search_query=",
    "?o": "https://www.google.com/search?q=site%3Astackoverflow.com+",
    "?r": "https://github.com/search?type=repositories&q=",
    "?c": "https://github.com/search?type=code&q=",
  },
};

browser.storage.sync.get().then((obj) => {
  obj = isEmptyObject(obj) ? defaultOptions : obj;
  instantMacros = obj.instantMacros;
  searchMacros = obj.searchMacros;
  console.log(instantMacros, searchMacros);
}, console.error);

const checkInstantMacros = (e) => {
  const query = e.target.value;
  if (query in instantMacros) {
    clearInput();
    open(instantMacros[query], "_self");
  }
};

const checkSearchMacros = (e) => {
  const match = e.target.value.match(/\?(.*?)\s+(.*)/);
  if (match) {
    const [_, command, query] = match;

    if (command in searchMacros) {
      clearInput();
      open(searchMacros[command].concat(encodeURIComponent(query)), "_self");
      return true;
    }
  }
  return false;
};

search.style.display = "none"
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

search.addEventListener("input", checkInstantMacros);
search.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    toggleDisplay();
  } else if (e.key === "Enter") {
    if (!checkSearchMacros(e)) {
      open(
        `https://www.google.com/search?q=${encodeURIComponent(e.target.value)}`,
        "_self",
      );
    }
  }
});
