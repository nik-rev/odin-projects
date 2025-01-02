export default function allFavorite() {
  const favoriteArray = [];
  for (const [key, value] of Object.entries(localStorage)) {
    const todos = JSON.parse(value);
    for (const todo of todos) {
      if (todo["favorite"]) {
        favoriteArray.push(todo);
      }
    }
  }
  return JSON.stringify(favoriteArray);
}
