import { getApiData } from "./scripts/handlers/getApi.js";
import { renderServerChanges } from "./scripts/handlers/renderServerChanges.js";
import { clearInput } from "./scripts/handlers/input.js";
import { clearBtn } from "./scripts/constants.js";

import { state } from "./scripts/state.js";

window.addEventListener("load", () => {
  getApiData();
  renderServerChanges(state);
});

// handlers for input
clearBtn.addEventListener("click", clearInput);
