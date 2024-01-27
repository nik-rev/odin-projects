import createProjectsList from "./create-projects-list";
import removeProjectsList from "./remove-projects-list";

export default function updateProjectsList() {
  removeProjectsList();
  createProjectsList();
}
