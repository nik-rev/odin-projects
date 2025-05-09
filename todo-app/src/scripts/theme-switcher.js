import { images } from ".";

export default function themeSwitcher() {
  console.log("test");
  const themeIcon = document.querySelector("#theme");
  const body = document.querySelector("body");

  sessionStorage["theme"] === "light";

  if (sessionStorage["theme"] === "dark") {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    themeIcon.src = images["dark-theme.svg"];
    themeIcon.addEventListener("click", themeIconState2);
  }
  if (sessionStorage["theme"] === "light") {
    body.classList.add("light-theme");
    body.classList.remove("dark-theme");
    themeIcon.addEventListener("click", themeIconState1);
  }
  if (sessionStorage["theme"] === undefined) {
    themeIcon.addEventListener("click", themeIconState1);
  }

  // try {

  // } catch {
  //   themeIcon.addEventListener("click", themeIconState1);
  // }

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
}
