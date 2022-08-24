import Task from "../Classes/Task.js";
import { inputTask, taskContainer } from "../constants.js";

import { addApiTask } from "../handlers/add.js";
import { editTask } from "./edit.js";
import { deleteApiTask } from "../handlers/delete.js";

export function renderAddedTask(id) {
  let task = new Task(
    id,
    document.getElementById("task-input").value,
    taskContainer,
    addApiTask,
    editTask,
    deleteApiTask
  );
  task.generateTask();
  task.renderTask();
  task.setHandlers();
  inputTask.value = "";
}
