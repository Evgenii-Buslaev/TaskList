import { getApiData } from "./scripts/handlers/getApi.js";
import { renderServerChanges } from "./scripts/handlers/renderServerChanges.js";

import { state } from "./scripts/state.js";

window.addEventListener("load", () => {
  getApiData();
  renderServerChanges(state);
});
