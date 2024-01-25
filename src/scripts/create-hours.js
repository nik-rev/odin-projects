export default function (parent, schedule) {
  const section = document.createElement("section");
  section.setAttribute("id", "hours");
  const ul = document.createElement("ul");
  const h4 = document.createElement("h4");
  parent.appendChild(section);
  section.appendChild(h4);
  section.appendChild(ul);
  for (const [key, value] of Object.entries(schedule)) {
    const daySchedule = document.createElement("li");
    // MAJOR ASSUMPTION: Schedule starts in the morning and ends in the evening
    daySchedule.textContent = `${key}: ${value.at(0)}am - ${value.at(1)}pm`;
    ul.appendChild(daySchedule);
  }
}
