import { images } from ".";
import domWeatherCreate from "./dom-weather-create";
// import {
//   getDataForSevenDays,
//   getDataToday,
//   getDataTodayHours,
// } from "./format-data";

export default function weatherSearch(e) {
  e.preventDefault();
  // const imperial = document.getElementById("#imperial");
  const search = document.querySelector("form > input");
  const imperialP = document.querySelector("#imperial > p");
  const loading = document.createElement("img");
  loading.classList.add("loading");
  // console.log(images);
  loading.src = images["clock-icon.svg"];

  // imperialP.textContent = imperialP.textContent === "OFF" ? "ON" : "OFF";

  try {
    const weather = Array.from(document.querySelectorAll("main > article"));
    const main = document.querySelector("main");
    if (document.querySelector("h2")) {
      main.removeChild(document.querySelector("h2"));
    }
    main.append(loading);

    weather.forEach((article) => {
      main.removeChild(article);
    });

    const mainHeading = document.querySelector(".report-title");
    // console.log(main, mainHeading);
    main.removeChild(mainHeading);
  } catch {}
  // getDataForSevenDays(search.value).then((resolve) => console.log(resolve));
  // getDataToday(search.value).then((resolve) => console.log(resolve));
  // getDataTodayHours(search.value).then((resolve) => console.log(resolve));
  domWeatherCreate(search.value, imperialP.textContent);
  search.value = "";
}
