import requestData from "./request-data";
import formatArray from "./format-array";

export async function getDataForSevenDays(input, imperial) {
  const data = await requestData(input);
  const sevenDaysArray = [];
  const modifiedSevenDaysArray = [];

  data.forecast.forecast.forecastday.forEach((day) => {
    sevenDaysArray.push(day);
  });
  sevenDaysArray.reverse();

  Object.values(data.history).forEach((day) => {
    sevenDaysArray.push(day.forecast.forecastday[0]);
  });

  formatArray(sevenDaysArray, imperial, modifiedSevenDaysArray);

  return modifiedSevenDaysArray;
}

export async function getDataToday(input, imperial) {
  const data = await requestData(input);
  const todayArray = [data.forecast.current];
  const modifiedTodayArray = [];

  formatArray(todayArray, imperial, modifiedTodayArray);

  return modifiedTodayArray;
}

export async function getDataTodayHours(input, imperial) {
  const currentHour = Math.trunc(
    (Date.now() % (3600 * 24 * 1000)) / (3600 * 1000)
  );
  const data = await requestData(input);
  let today = data.forecast.forecast.forecastday[0].hour;
  today = today.slice(currentHour + 1);
  let tomorrow = data.forecast.forecast.forecastday[1].hour;
  tomorrow = tomorrow.slice(0, currentHour + 1);
  const hours = today.concat(tomorrow);
  const hoursModified = [];
  formatArray(hours, imperial, hoursModified);

  return hoursModified;
}
