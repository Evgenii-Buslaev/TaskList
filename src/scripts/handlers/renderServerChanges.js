import Task from "../Classes/Task.js";
import { taskContainer } from "../constants.js";
import { addApiTask } from "../handlers/add.js";
import { deleteApiTask } from "../handlers/delete.js";

// function for rendering server data after loading the page

async function renderServerChanges(object) {
  let checking = setInterval(() => {
    if (object.data_recieved) {
      object.data_array.forEach((element) => {
        let task = new Task(element.id, element.task, taskContainer, {
          addApiTask,
          deleteApiTask,
        });
        task.generateTask();
        task.renderTask();
        task.setHandlers();
      });
      clearInterval(checking);
    }
  }, 100);
}

export { renderServerChanges };
