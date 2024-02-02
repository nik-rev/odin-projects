import { getDataForSevenDays } from "./format-data";

async function domWeatherReportCreate(
  snowChance,
  rainChance,
  date,
  condition,
  humidity,
  sunset,
  sunrise,
  temperature,
  icon,
  windSpeed
) {
  const weatherReport = document.createElement("article");
  const main = document.querySelector("main");
  main.appendChild(weatherReport);
  weatherReport.setAttribute("id", "weather-report");

  // Snow Chance
  const weatherReportSnowChance = document.createElement("p");
  weatherReportSnowChance.setAttribute("id", "weather-snow-chance");
  weatherReportSnowChance.textContent = `Snow chance: ${snowChance}`;
  weatherReport.appendChild(weatherReportSnowChance);

  // Rain Chance
  const weatherReportRainChance = document.createElement("p");
  weatherReportRainChance.setAttribute("id", "weather-rain-chance");
  weatherReportRainChance.textContent = `Rain chance: ${rainChance}`;
  weatherReport.appendChild(weatherReportRainChance);

  // Date
  const weatherReportDate = document.createElement("p");
  weatherReportDate.setAttribute("id", "weather-date");
  weatherReportDate.textContent = `Date: ${date}`;
  weatherReport.appendChild(weatherReportDate);

  // Condition
  const weatherReportCondition = document.createElement("p");
  weatherReportCondition.setAttribute("id", "weather-condition");
  weatherReportCondition.textContent = `Condition: ${condition}`;
  weatherReport.appendChild(weatherReportCondition);

  // Humidity
  const weatherReportHumidity = document.createElement("p");
  weatherReportHumidity.setAttribute("id", "weather-humidity");
  weatherReportHumidity.textContent = `Humidity: ${humidity}%`;
  weatherReport.appendChild(weatherReportHumidity);

  // Sunset
  const weatherReportSunset = document.createElement("p");
  weatherReportSunset.setAttribute("id", "weather-sunset");
  weatherReportSunset.textContent = `Sunset: ${sunset}`;
  weatherReport.appendChild(weatherReportSunset);

  // Sunrise
  const weatherReportSunrise = document.createElement("p");
  weatherReportSunrise.setAttribute("id", "weather-sunrise");
  weatherReportSunrise.textContent = `Sunrise: ${sunrise}`;
  weatherReport.appendChild(weatherReportSunrise);

  // Temperature
  const weatherReportTemperature = document.createElement("p");
  weatherReportTemperature.setAttribute("id", "weather-temperature");
  weatherReportTemperature.textContent = `Temperature: ${temperature}°C`;
  weatherReport.appendChild(weatherReportTemperature);

  // Icon
  const weatherReportIcon = document.createElement("img");
  weatherReportIcon.setAttribute("id", "weather-icon");
  weatherReportIcon.setAttribute("src", icon); // Assuming 'icon' is a URL to an image
  weatherReportIcon.setAttribute("alt", "weather condition icon");
  weatherReport.appendChild(weatherReportIcon);

  // Wind Speed
  const weatherReportWindSpeed = document.createElement("p");
  weatherReportWindSpeed.setAttribute("id", "weather-wind-speed");
  weatherReportWindSpeed.textContent = `Wind Speed: ${windSpeed} km/h`;
  weatherReport.appendChild(weatherReportWindSpeed);
}

export default async function domWeatherCreate(input, imperial) {
  const data = await getDataForSevenDays(input, imperial);

  const weatherReportTitle = document.createElement("h1");
  weatherReportTitle.classList.add("report-title");
  weatherReportTitle.textContent = `${input}`;
  const main = document.querySelector("main");
  main.appendChild(weatherReportTitle);

  data.forEach((day) => {
    domWeatherReportCreate(
      day.snowChance,
      day.rainChance,
      day.date.date,
      day.condition,
      day.humidity,
      day.sunset,
      day.sunrise,
      day.temperature,
      day.icon.icon,
      day.windSpeed,
      input
    );
  });
}
