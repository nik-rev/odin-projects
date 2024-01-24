function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context("../styles/", true, /\.css$/));
