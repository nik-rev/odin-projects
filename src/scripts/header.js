export const createHeader = (body) => {
  const home = document.createElement("button");
  const menu = document.createElement("button");
  const contact = document.createElement("button");
  const nav = document.createElement("nav");
  const header = document.createElement("header");
  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";
  body.appendChild(header);
  header.appendChild(nav);
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  return [home, menu, contact];
};
