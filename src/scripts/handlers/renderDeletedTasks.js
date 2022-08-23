import { taskContainer } from "../constants.js";

export function renderDeletedTask(id) {
  let targetTask = document.getElementById(id);
  taskContainer.removeChild(targetTask);
}
