import { getApiData } from "./scripts/handlers/get.js";
import { renderServerChanges } from "./scripts/handlers/renderServerChanges.js";
import { clearInput } from "./scripts/handlers/input.js";
import { inputTask, clearBtn, addBtn } from "./scripts/constants.js";

import { state } from "./scripts/state.js";
import { addApiTask } from "./scripts/handlers/add.js";

window.addEventListener("load", () => {
  getApiData();
  renderServerChanges(state);
});

addBtn.addEventListener("click", () => {
  addApiTask();
});

inputTask.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    addApiTask();
  }
});

// handlers for input
clearBtn.addEventListener("click", clearInput);
