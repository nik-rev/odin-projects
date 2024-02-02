export default async function requestData(input) {
  const dateOneDayAgo = new Date(Date.now() - 1 * 24 * 3600 * 1000);
  const dateTwoDaysAgo = new Date(Date.now() - 2 * 24 * 3600 * 1000);
  const dateThreeDaysAgo = new Date(Date.now() - 3 * 24 * 3600 * 1000);
  const dateFourDaysAgo = new Date(Date.now() - 4 * 24 * 3600 * 1000);

  const oneDayAgo = await fetch(
    `https://api.weatherapi.com/v1/history.json?key=9c9abdde645d4967bb9162009240102&q=${input}&dt=${dateOneDayAgo.getFullYear()}-${
      dateOneDayAgo.getMonth() + 1
    }-${dateOneDayAgo.getDate()}`
  );
  const twoDaysAgo = await fetch(
    `https://api.weatherapi.com/v1/history.json?key=9c9abdde645d4967bb9162009240102&q=${input}&dt=${dateTwoDaysAgo.getFullYear()}-${
      dateTwoDaysAgo.getMonth() + 1
    }-${dateTwoDaysAgo.getDate()}`
  );
  const threeDaysAgo = await fetch(
    `https://api.weatherapi.com/v1/history.json?key=9c9abdde645d4967bb9162009240102&q=${input}&dt=${dateThreeDaysAgo.getFullYear()}-${
      dateThreeDaysAgo.getMonth() + 1
    }-${dateThreeDaysAgo.getDate()}`
  );
  const fourDaysAgo = await fetch(
    `https://api.weatherapi.com/v1/history.json?key=9c9abdde645d4967bb9162009240102&q=${input}&dt=${dateFourDaysAgo.getFullYear()}-${
      dateFourDaysAgo.getMonth() + 1
    }-${dateFourDaysAgo.getDate()}`
  );
  const forecast = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=9c9abdde645d4967bb9162009240102&q=${input}&days=3`
  );

  return {
    history: {
      oneDayAgo: await oneDayAgo.json(),
      twoDaysAgo: await twoDaysAgo.json(),
      threeDaysAgo: await threeDaysAgo.json(),
      fourDaysAgo: await fourDaysAgo.json(),
    },
    forecast: await forecast.json(),
  };
}
