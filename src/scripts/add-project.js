import updateDates from "./update-dates";
import updateProject from "./update-project";
import updateProjectsList from "./update-projects-list";

export default function addProject(projectName) {
  localStorage[projectName] = JSON.stringify([]);
  updateProject(projectName);
  updateProjectsList();
  updateDates();
}
