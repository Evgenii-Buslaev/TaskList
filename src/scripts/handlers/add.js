// function for adding server data

let task = { task: "новая таска" };
console.log(task);

let data = {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(task),
};

export async function addApiTask() {
  let postTasksPromise = fetch(
    "https://animesonproject.herokuapp.com/api/v1/task/",
    data
  );

  let tasksResponse = await postTasksPromise;
  let tasks = await tasksResponse.json();
  console.log(tasks);
}

export { task };
