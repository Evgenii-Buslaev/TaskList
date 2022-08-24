// function for adding server data
import { body } from "../constants.js";

import { renderAddedTask } from "../handlers/renderAddedTasks.js";

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
    // click counter
    let click = 0;
    // notification element
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent =
      "Task cannot be empry field. Please, type something";

    // clear button
    const clearNotif = document.createElement("div");
    clearNotif.textContent = "clear";
    clearNotif.classList.add("clear-notif-button");
    clearNotif.addEventListener("click", () => {
      click++;
      body.removeChild(notification);
    });
    notification.appendChild(clearNotif);

    // adding and clearing
    if (click === 0) {
      body.appendChild(notification);
      setTimeout(() => {
        if (body.querySelector(".notification")) {
          notification.style.opacity = "1";
        }
      }, 0);
      setTimeout(() => {
        if (body.querySelector(".notification")) {
          notification.style.opacity = "0";
        }
      }, 4000);
      setTimeout(() => {
        if (body.querySelector(".notification")) {
          body.removeChild(notification);
        }
      }, 5000);
    }
  }
}
