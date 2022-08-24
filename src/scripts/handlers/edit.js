export async function editTask(id) {
  console.log(id);

  let task = { task: `${document.getElementById(id).children[0].textContent}` };

  let data = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(task),
  };

  let patchRequest = fetch(
    `https://animesonproject.herokuapp.com/api/v1/task/${id}/edit`,
    data
  );

  let editedTask = await patchRequest;
  let responseRequest = await editedTask.json();
  console.log(responseRequest);
}
