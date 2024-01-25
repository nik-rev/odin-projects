export default function createFooter(text, parent) {
  const footer = document.createElement("footer");
  footer.textContent = text;
  parent.appendChild(footer);
}
