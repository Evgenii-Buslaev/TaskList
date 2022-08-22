export async function deleteApiTask(id) {
  let data = {
    method: "DELETE",
  };

  let delTaskPromise = fetch(
    `https://animesonproject.herokuapp.com/api/v1/task/${id}/delete`,
    data
  );

  let result = await delTaskPromise;
  console.log(result);
}
