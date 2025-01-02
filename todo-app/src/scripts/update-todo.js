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
    checked: temp[idToUpdate]["checked"],
  };

  temp[idToUpdate] = newTodo;

  localStorage[projectName] = JSON.stringify(temp);
}
