// function for adding server data

import { renderAddedTask } from "./renderAddedTasks.js";

export async function addApiTask() {
  let task = { task: `${document.getElementById("task-input").value}` };

  let data = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(task),
  };

  fetch("https://animesonproject.herokuapp.com/api/v1/task/", data)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      renderAddedTask(result.id);
    });
}
