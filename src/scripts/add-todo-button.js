export default function addTodoButton(parent) {
  const createButton = document.createElement("button");
  createButton.classList.add("add-todo-button");
  parent.append(createButton);
  createButton.textContent = "+";

  createButton.addEventListener("click", () => {
    console.log("hello");
  });
}
