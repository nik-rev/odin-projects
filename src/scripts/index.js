// CSS Files
function importAllCSS(r) {
  r.keys().forEach(r);
}
importAllCSS(require.context("../styles/", true, /\.css$/));

// Images
function importAllImages(r) {
  r.keys().forEach(r);
}
importAllImages(
  require.context("../assets/img/", false, /\.(png|svg|jpe?g|gif)$/)
);
