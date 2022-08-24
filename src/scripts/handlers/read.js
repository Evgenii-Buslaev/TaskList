export async function readTask(id) {
  let taskInfo = await fetch(
    `https://animesonproject.herokuapp.com/api/v1/task/${id}`
  );
  let resultResponse = await taskInfo.json();
  console.log(resultResponse);
}
