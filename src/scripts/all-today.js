import {
  MS_IN_DAY,
  MS_IN_WEEK,
  MS_IN_MONTH,
  MS_IN_YEAR,
} from "./time-constants";

export default function allToday() {
  const todayArray = [];
  const weekArray = [];
  const monthArray = [];
  const yearArray = [];
  for (const [key, value] of Object.entries(localStorage)) {
    const todos = JSON.parse(value);
    for (const todo of todos) {
      const DATE_IN_MILLISECONDS_ACTUAL = new Date(todo["date"]);
      const DATE_IN_MILLISECONDS = Math.abs(
        Date.now() - DATE_IN_MILLISECONDS_ACTUAL
      );
      if (DATE_IN_MILLISECONDS < MS_IN_DAY) {
        todayArray.push(todo);
      }
      if (DATE_IN_MILLISECONDS < MS_IN_WEEK) {
        weekArray.push(todo);
      }
      if (DATE_IN_MILLISECONDS < MS_IN_MONTH) {
        monthArray.push(todo);
      }
      if (DATE_IN_MILLISECONDS < MS_IN_YEAR) {
        yearArray.push(todo);
      }
    }
  }
  return [todayArray, weekArray, monthArray, yearArray];
}
