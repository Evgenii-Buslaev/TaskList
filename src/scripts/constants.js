// variables for working with DOM
const body = document.querySelector("body");
// input part
const inputTask = document.getElementById("task-input");
const clearBtn = document.getElementById("clear-input-btn");
const addBtn = document.getElementById("add-btn");

// tasks part
const taskContainer = document.querySelector("#tasks-container");

export { body, inputTask, clearBtn, addBtn, taskContainer };
