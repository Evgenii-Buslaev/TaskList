// function for adding server data

export async function addApiTask() {
  let task = { task: `${document.getElementById("task-input").value}` };

  let data = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(task),
  };

  let postTasksPromise = fetch(
    "https://animesonproject.herokuapp.com/api/v1/task/",
    data
  );

  let tasksResponse = await postTasksPromise;
  let tasks = await tasksResponse.json();
  console.log(tasks);
}
