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

      // if (doesInclude === true) {
      //   const indexToExclude = todos.indexOf(todo);
      //   // console.log(todos, indexToExclude);
      //   todos.splice(indexToExclude, 1);
      //   console.log("a");
      // console.log(todos);
    }
    indexesToRemove.reverse();
    for (const index of indexesToRemove) {
      todos.splice(index, 1);
    }
    localStorage[key] = JSON.stringify(todos);
  }
  // console.log(todos);
}
