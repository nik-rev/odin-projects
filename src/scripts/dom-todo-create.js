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

export default function domTodoCreate() {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const pDescription = document.createElement("div");
  const pDate = document.createElement("div");
  const imgFavorite = document.createElement("div");
  const imgDelete = document.createElement("div");
  div.classList.add("todo");
  h2.classList.add("title");
  pDescription.classList.add("description");
  pDate.classList.add("date");
  imgFavorite.classList.add("favorite");
  imgDelete.classList.add("delete");
  imgFavorite.src = images["star.svg"];
}
