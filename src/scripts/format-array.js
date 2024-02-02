export default async function formatArray(
  arrayToFormat,
  imperial,
  arrayToModify
) {
  arrayToFormat.forEach((day) => {
    let temperature;
    let windSpeed;
    let humidity;
    let condition;
    let icon;
    let rainChance;
    let snowChance;
    let sunset;
    let sunrise;
    let date;
    let locationData;
    try {
      temperature = imperial
        ? `${day.day.avgtemp_f} °F`
        : `${day.day.avgtemp_c} °C`;
      windSpeed = imperial
        ? `${day.day.maxwind_mph} mph`
        : `${day.day.maxwind_kph} km/h`;
      humidity = day.day.avghumidity;
      condition = day.day.condition.text;
      icon = day.day.condition;
      rainChance = day.day.daily_chance_of_rain;
      snowChance = day.day.daily_chance_of_snow;
      sunset = day.astro.sunrise;
      sunrise = day.astro.sunset;
      date = day;
      locationData = {
        date,
        humidity,
        condition,
        sunset,
        sunrise,
        temperature,
        windSpeed,
        rainChance,
        snowChance,
        icon,
      };
    } catch {
      temperature = imperial ? `${day.temp_f} °F` : `${day.temp_c} °C`;
      windSpeed = imperial ? `${day.wind_mph} mph` : `${day.wind_kph} km/h`;
      humidity = day.humidity;
      condition = day.condition.text;
      icon = day.condition.icon;
      locationData = {
        temperature,
        windSpeed,
        humidity,
        condition,
        icon,
      };
      try {
        rainChance = day.chance_of_rain;
        snowChance = day.chance_of_snow;
        locationData = {
          ...locationData,
          rainChance,
          snowChance,
        };
      } catch {}
    }
    arrayToModify.push(locationData);
  });
}
