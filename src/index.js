import Task from "./scripts/Classes/Task.js";

import { body } from "./scripts/constants.js";

async function getApiData() {
  let getTasksPromise = fetch(
    "https://animesonproject.herokuapp.com/api/v1/task/"
  );

  let tasksResponse = await getTasksPromise;
  let tasks = await tasksResponse.json();
  console.log(tasks);

  tasks.forEach((element) => {
    let task = new Task(element.task, body);
    task.generateTask();
    task.renderTask();
  });
}

getApiData();
