export { importAllImages, images };

function importAllCSS(r) {
  r.keys().forEach(r);
}
importAllCSS(require.context("../styles/", true, /\.css$/));

function importAllImages(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAllImages(
  require.context("../assets/img/", false, /\.(png|svg|jpe?g|gif)$/)
);

import todo from "./todo-class";
const todoToday = new todo(
  "Birthday",
  "Happy birthday to me",
  "14 August",
  "Blue",
  "Events",
  true
);
console.table(todoToday);
