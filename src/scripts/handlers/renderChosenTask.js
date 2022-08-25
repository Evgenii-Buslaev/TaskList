import { taskContainer } from "../constants.js";
import { state } from "../state.js";
import { getApiData } from "./get.js";
import { renderServerChanges } from "./renderServerChanges.js";

export function renderChosenTask(id) {
  let task = null;
  let taskArray = taskContainer.children;
  for (let i = 0; i < taskArray.length; i++) {
    if (taskArray[i].id == id) {
      task = taskArray[i].cloneNode(true);
    }
  }
  taskContainer.innerHTML = "";

  let backBtn = document.createElement("div");
  backBtn.innerText = "Back";
  backBtn.classList.add("back_btn");
  backBtn.addEventListener("click", () => {
    getApiData();
    renderServerChanges(state);
  });

  taskContainer.appendChild(backBtn);
  taskContainer.appendChild(task);
}
