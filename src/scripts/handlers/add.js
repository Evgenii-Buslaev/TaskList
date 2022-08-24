// function for adding server data

import { renderAddedTask } from "../handlers/renderAddedTasks.js";
import { throwNotification } from "./invalid_input.js";

export async function addApiTask() {
  let inputValue = document.getElementById("task-input").value;

  let task = { task: `${inputValue}` };

  let data = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(task),
  };

  if (inputValue !== "" && inputValue !== null && inputValue !== undefined) {
    fetch("https://animesonproject.herokuapp.com/api/v1/task/", data)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        renderAddedTask(result.id);
      })
      .catch((error) => console.log(error));
  } else {
    throwNotification();
  }
}
