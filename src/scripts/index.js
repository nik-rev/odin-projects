// import {
//   getDataToday,
//   getDataForSevenDays,
//   getDataTodayHours,
// } from "./format-data";
import parallax from "./parallax";
// import requestData from "./request-data"; // remove later

function importAllCSS(r) {
  r.keys().forEach(r);
}
importAllCSS(require.context("../styles/", true, /\.css$/));

function importAllImages(r) {
  const images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAllImages(
  require.context("../assets/img/", false, /\.(png|svg|jpe?g|gif)$/)
);

// requestData("London").then((resolve) => console.log(resolve));
// getDataForSevenDays("London").then((result) => console.log(result));
// getDataTodayHours("London").then((resolve) => console.log(resolve));
document.addEventListener("mousemove", parallax);

export { importAllImages, images };
