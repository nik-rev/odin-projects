export default function removeProjectsList() {
  const projectNames = document.querySelector("#project-names");
  const projectNameArray = Array.from(
    document.querySelectorAll(".project-name")
  );
  for (const node of projectNameArray) {
    projectNames.removeChild(node);
  }
}
