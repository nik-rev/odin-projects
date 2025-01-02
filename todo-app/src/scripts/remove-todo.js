export default function removeTodo(projectName, idToRemove) {
  const temp = JSON.parse(localStorage[`${projectName}`]);
  temp.splice(idToRemove, 1);
  localStorage[`${projectName}`] = JSON.stringify(temp);
}
