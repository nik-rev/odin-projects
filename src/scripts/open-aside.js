import toggleAsideArticleClasses from "./toggle-aside-article-classes";

// let shouldAddClass = false;

export function shouldBeOpen() {
  return shouldAddClass;
}

export default function openAside() {
  const menuBtn = document.querySelector(".menu");
  // const aside = document.querySelector("aside");
  // const main = document.querySelector("main");
  // const article = document.querySelector("body article");

  menuBtn.addEventListener("click", toggleAsideArticleClasses);

  // function menuBtnState1() {
  //   menuBtn.removeEventListener("click", menuBtnState1);
  //   menuBtn.addEventListener("click", menuBtnState2);
  //   shouldAddClass = true;
  //   toggleAsideArticleClasses();
  // }

  // function menuBtnState2() {
  //   menuBtn.removeEventListener("click", menuBtnState2);
  //   menuBtn.addEventListener("click", menuBtnState1);
  //   shouldAddClass = false;
  //   toggleAsideArticleClasses();
  // }
}
