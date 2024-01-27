export default function clearProject() {
  const article = document.querySelector("article");
  const main = document.querySelector("main");
  main.removeChild(article);
}
