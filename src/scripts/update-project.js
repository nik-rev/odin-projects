import clearProject from "./clear-project";
import createDomProject from "./populate-project";

export default function updateProject(proj, state) {
  clearProject();
  createDomProject(proj, state);
}
