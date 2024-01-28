export default function updateTodo(
  projectName,
  idToUpdate,
  title,
  description,
  date,
  priority
) {
  let temp;
  try {
    temp = JSON.parse(localStorage[`${projectName}`]);
  } catch (err) {
    temp = JSON.parse(project);
  }

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
