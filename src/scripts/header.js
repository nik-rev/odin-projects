import configureButtonLogic from "./button-logic.js";
export const createHeader = (parent, arrayOfButtons) => {
  const nav = document.createElement("nav");
  const header = document.createElement("header");
  parent.appendChild(header);
  header.appendChild(nav);
  for (const button of arrayOfButtons) {
    const domButton = document.createElement("button");
    domButton.textContent = button;
    nav.appendChild(domButton);
    configureButtonLogic(domButton);
  }
};
