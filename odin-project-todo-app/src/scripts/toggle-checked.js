export default function toggleChecked(projectName, idToToggle) {
  const temp = JSON.parse(localStorage[`${projectName}`]);

  temp[idToToggle]["checked"] = !JSON.parse(temp[idToToggle]["checked"]);
  localStorage[projectName] = JSON.stringify(temp);
}
