export default function validateTodos() {
  for (const [key, value] of Object.entries(localStorage)) {
    let todos = JSON.parse(value);
    const indexesToRemove = [];
    for (const todo of todos) {
      const myArray = Object.values(todo);
      const doesInclude = myArray.includes("");
      if (doesInclude) {
        const indexToRemove = todos.indexOf(todo);
        indexesToRemove.push(indexToRemove);
      }
    }
    indexesToRemove.reverse();
    for (const index of indexesToRemove) {
      todos.splice(index, 1);
    }
    localStorage[key] = JSON.stringify(todos);
  }
}
