import { getApiData } from "./scripts/handlers/getApi.js";
import { renderServerChanges } from "./scripts/handlers/renderServerChanges.js";
import { clearInput } from "./scripts/handlers/input.js";
import { clearBtn, addBtn } from "./scripts/constants.js";

import { state } from "./scripts/state.js";
import { addApiTask } from "./scripts/handlers/add.js";
import { deleteApiTask } from "./scripts/handlers/delete.js";
import { renderAddedTask } from "./scripts/handlers/renderAddedTasks.js";

window.addEventListener("load", () => {
  getApiData();
  renderServerChanges(state);
});

addBtn.addEventListener("click", () => {
  addApiTask();
  renderAddedTask();
});

/* deleteApiTask(14); */

// handlers for input
clearBtn.addEventListener("click", clearInput);
