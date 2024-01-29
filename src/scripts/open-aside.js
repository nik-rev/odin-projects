import toggleAsideArticleClasses from "./toggle-aside-article-classes";

export function shouldBeOpen() {
  return shouldAddClass;
}

export default function openAside() {
  const menuBtn = document.querySelector(".menu");
  menuBtn.addEventListener("click", toggleAsideArticleClasses);
}
