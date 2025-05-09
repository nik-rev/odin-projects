import setupInputScreenEventListeners from "./dom/input-screen";

function importAllCSS(require) {
  require.keys().forEach(require);
}
importAllCSS(require.context("../styles/", true, /\.css$/));

setupInputScreenEventListeners();
