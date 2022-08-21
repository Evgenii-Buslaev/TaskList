import { state } from "../state.js";

// function for getting server data

async function getApiData() {
  let getTasksPromise = fetch(
    "https://animesonproject.herokuapp.com/api/v1/task/"
  );

  let tasksResponse = await getTasksPromise;
  let tasks = await tasksResponse.json();
  state.data_recieved = true;
  state.data_array = tasks;
  console.log(state.data_array);
}

export { getApiData };
