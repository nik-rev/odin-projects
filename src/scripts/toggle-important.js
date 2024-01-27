export default function toggleImportant(projectName, idToToggle) {
  const temp = JSON.parse(localStorage[`${projectName}`]);

  temp[idToToggle]["favorite"] = !JSON.parse(temp[idToToggle]["favorite"]);

  localStorage[projectName] = JSON.stringify(temp);
}
