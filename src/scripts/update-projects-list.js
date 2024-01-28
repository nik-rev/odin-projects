import createProjectsList from "./create-projects-list";
import removeProjectsList from "./remove-projects-list";
import updateDates from "./update-dates";

export default function updateProjectsList() {
  removeProjectsList();
  createProjectsList();
  updateDates();
}
