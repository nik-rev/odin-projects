import { images } from ".";

// if (
//   window.matchMedia &&
//   window.matchMedia("(prefers-color-scheme: dark)").matches
// ) {
//   // dark mode
// }

const themeSwitcher = () => {
  const themeIcon = document.querySelector("#theme");
  const body = document.querySelector("body");
  let theme = "light";

  try {
    if (sessionStorage["theme"] === "dark") {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      themeIcon.addEventListener("click", themeIconState2);
    }
    if (sessionStorage["theme"] === "light") {
      body.classList.add("light-theme");
      body.classList.remove("dark-theme");
      themeIcon.addEventListener("click", themeIconState1);
    }
  } catch {
    themeIcon.addEventListener("click", themeIconState1);
  }

  function themeIconState1() {
    themeIcon.removeEventListener("click", themeIconState1);
    themeIcon.addEventListener("click", themeIconState2);
    themeIcon.src = images["dark-theme.svg"];
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
    sessionStorage["theme"] = "dark";
  }

  function themeIconState2() {
    themeIcon.removeEventListener("click", themeIconState2);
    themeIcon.addEventListener("click", themeIconState1);
    themeIcon.src = images["light-theme.svg"];
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
    sessionStorage["theme"] = "light";
  }

  return theme;
};

export { themeSwitcher };
