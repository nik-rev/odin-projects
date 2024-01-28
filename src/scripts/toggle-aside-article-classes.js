export default function toggleAsideArticleClasses() {
  const menuBtn = document.querySelector(".menu");
  const aside = document.querySelector("aside");
  const main = document.querySelector("main");
  const article = document.querySelector("body article");

  main.classList.toggle("main-closed-aside");
  aside.classList.toggle("aside-closed-aside");
  main.classList.toggle("main-open-aside");
  aside.classList.toggle("aside-open-aside");
  article.classList.toggle("body-open-aside");

  if (main.classList.contains("main-closed-aside")) {
    article.classList.remove("body-open-aside");
  }
}
