export default function (schedule) {
  const section = document.createElement("section");
  const ul = document.createElement("ul");
  const h4 = document.createElement("h4");

  section.id = "hours";
  h4.textContent = "Our schedule";

  section.append(h4, ul);
  for (const [key, value] of Object.entries(schedule)) {
    const daySchedule = document.createElement("li");
    // MAJOR ASSUMPTION: Schedule starts in the morning and ends in the evening
    daySchedule.textContent = `${key}: ${value.at(0)}am - ${value.at(1)}pm`;
    ul.appendChild(daySchedule);
  }
  return section;
}
