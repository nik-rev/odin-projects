export default function updateTodo(
  projectName,
  idToUpdate,
  title,
  description,
  date,
  priority
) {
  const temp = JSON.parse(localStorage[`${projectName}`]);

  const newTodo = {
    title,
    description,
    date,
    priority,
    favorite: temp[idToUpdate]["favorite"],
  };

  temp[idToUpdate] = newTodo;

  localStorage[projectName] = JSON.stringify(temp);
}
