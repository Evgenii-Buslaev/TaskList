import { renderChosenTask } from "./renderChosenTask.js";

export function readTask(id, value) {
  fetch(`https://animesonproject.herokuapp.com/api/v1/task/${id}`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      renderChosenTask(id, value);
    });
}
