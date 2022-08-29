import { renderChosenTask } from "./renderChosenTask.js";

export function readTask(id) {
  fetch(`https://animesonproject.herokuapp.com/api/v1/task/${id}`)
    .then((response) => response.json())
    .then((result) => {
      renderChosenTask(id);
      console.log(result);
    });
}
