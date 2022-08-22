import Task from "../Classes/Task.js";
import { taskContainer } from "../constants.js";

export function renderAddedTask() {
  let task = new Task(
    document.getElementById("task-input").value,
    taskContainer
  );
  task.generateTask();
  task.renderTask();
}
