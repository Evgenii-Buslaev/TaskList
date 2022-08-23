import Task from "../Classes/Task.js";
import { taskContainer } from "../constants.js";

import { addApiTask } from "../handlers/add.js";
import { deleteApiTask } from "../handlers/delete.js";

export function renderAddedTask(id) {
  let task = new Task(
    id,
    document.getElementById("task-input").value,
    taskContainer,
    addApiTask,
    deleteApiTask
  );
  task.generateTask();
  task.renderTask();
  task.setHandlers();
}
