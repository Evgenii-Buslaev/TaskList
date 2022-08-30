import { taskContainer } from "../constants.js";
import { state } from "../state.js";
import { getApiData } from "./get.js";
import { renderServerChanges } from "./renderServerChanges.js";

export function renderChosenTask(id, text) {
  let task = null;
  let taskArray = taskContainer.children;
  for (let i = 0; i < taskArray.length; i++) {
    if (taskArray[i].id == id) {
      taskArray[i].querySelector(".task-text").innerText = text;
      task = taskArray[i];
      task.querySelector(".buttons").style.display = "block";
    }
  }
  taskContainer.innerHTML = "";

  let backBtn = document.createElement("div");
  backBtn.innerText = "Back";
  backBtn.classList.add("back_btn");
  backBtn.addEventListener("click", () => {
    getApiData().then((result) => {
      console.log(result);
      renderServerChanges(state);
    });
  });

  taskContainer.appendChild(backBtn);
  taskContainer.appendChild(task);
}
