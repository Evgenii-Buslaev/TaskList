import { body } from "../constants.js";

export function throwNotification() {
  // click counter
  let click = 0;
  // notification element
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.textContent =
    "Task cannot be empry field. Please, type something";

  // clear button
  const clearNotif = document.createElement("div");
  clearNotif.textContent = "clear";
  clearNotif.classList.add("clear-notif-button");
  clearNotif.addEventListener("click", () => {
    click++;
    body.removeChild(notification);
  });
  notification.appendChild(clearNotif);

  // adding and clearing
  if (click === 0) {
    body.appendChild(notification);
    setTimeout(() => {
      if (body.querySelector(".notification")) {
        notification.style.opacity = "1";
      }
    }, 0);
    setTimeout(() => {
      if (body.querySelector(".notification")) {
        notification.style.opacity = "0";
      }
    }, 4000);
    setTimeout(() => {
      if (body.querySelector(".notification")) {
        body.removeChild(notification);
      }
    }, 5000);
  }
}
