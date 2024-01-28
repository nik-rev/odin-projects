import allToday from "./all-today";

export default function updateDates() {
  const datesArray = Array.from(document.querySelectorAll(".dates > *"));

  const totalDates = allToday();
  // Removing each date p tracker
  for (const dates of datesArray) {
    const dateTracker = dates.querySelector("p");
    dates.removeChild(dateTracker);
  }

  // Adding each date p tracker
  for (let i = 0; i < datesArray.length; i++) {
    const domDate = document.createElement("p");
    datesArray[i].append(domDate);
    domDate.textContent = `${totalDates[i].length}`;
  }
}
