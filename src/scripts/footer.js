export default function createFooter(text, body) {
  const footer = document.createElement("footer");
  footer.textContent = text;
  body.appendChild(footer);
}
