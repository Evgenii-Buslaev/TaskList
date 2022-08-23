import { renderDeletedTask } from "../handlers/renderDeletedTasks.js";

export async function deleteApiTask(id) {
  let data = {
    method: "DELETE",
  };

  fetch(`https://animesonproject.herokuapp.com/api/v1/task/${id}/delete`, data)
    .then((response) => {
      console.log(response);
      renderDeletedTask(id);
    })
    .catch((error) => console.log(error));
}
