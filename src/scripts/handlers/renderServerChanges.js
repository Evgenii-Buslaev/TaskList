import Task from "../Classes/Task.js";
import { body } from "../constants.js";

// function for rendering server data after loading the page

async function renderServerChanges(object) {
  let checking = setInterval(() => {
    if (object.data_recieved) {
      object.data_array.forEach((element) => {
        let task = new Task(element.task, body);
        task.generateTask();
        task.renderTask();
      });
      clearInterval(checking);
    }
  }, 100);
}

export { renderServerChanges };
