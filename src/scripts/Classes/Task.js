import { throwNotification } from "../handlers/invalid_input.js";

export default class Task {
  constructor(
    id,
    value,
    parent,
    addHandler,
    editHandler,
    deleteHandler,
    renderChangesHandler,
    readHandler,
    renderChosenTask,
    notificationHandler
  ) {
    this.id = id;
    this.value = value;
    this.parent = parent;
    this.currently_editing = false;

    // handlers
    this.add_handler = addHandler;
    this.edit_handler = editHandler;
    this.delete_handler = deleteHandler;
    this.read_handler = readHandler;
    this.render_changes = renderChangesHandler;
    this.render_chosen_one = renderChosenTask;

    // validation
    this.validation = notificationHandler;
  }

  generateTask() {
    // task node
    this.node = document.createElement("div");
    this.node.classList.add("task");
    this.node.setAttribute("id", this.id);

    // text element
    this.text = document.createElement("div");
    this.text.classList.add("task-text");
    this.text.innerText = this.value;

    // buttons
    this.buttons = document.createElement("div");
    this.buttons.classList.add("buttons");

    this.edit_btn = document.createElement("button");
    this.edit_btn.classList.add("edit-btn");
    this.edit_btn.textContent = "Edit";
    this.delete_btn = document.createElement("button");
    this.delete_btn.classList.add("delete_btn");
    this.delete_btn.textContent = "Delete";

    this.buttons.appendChild(this.edit_btn);
    this.buttons.appendChild(this.delete_btn);

    this.node.appendChild(this.text);
    this.node.appendChild(this.buttons);
  }

  editTask() {
    this.text.setAttribute("contenteditable", "true");
    this.currently_editing = true;
  }

  saveTask() {
    this.text.setAttribute("contenteditable", "false");
    this.currently_editing = false;
  }

  renderTask() {
    this.parent.appendChild(this.node);
  }

  setHandlers() {
    this.node.addEventListener("click", (e) => {
      if (
        e.target.parentNode.classList.value !== "buttons" &&
        this.currently_editing !== true
      ) {
        this.read_handler(this.id);
      }
    });
    this.edit_btn.addEventListener("click", (e) => {
      if (!e.target.classList.value.includes("save-btn")) {
        this.edit_btn.classList.add("save-btn");
        this.editTask();
        this.text.focus();
        this.edit_btn.textContent = "Save";
        this.node.style.backgroundColor = "rgb(13, 59, 41)";
      } else {
        if (
          this.text.textContent === "" ||
          this.text.textContent === null ||
          this.text.textContent === undefined
        ) {
          throwNotification();
          this.text.focus();
        } else {
          this.edit_btn.classList.remove("save-btn");
          this.saveTask();
          this.edit_btn.textContent = "Edit";
          this.node.style.backgroundColor = "rgb(62, 120, 97)";
          this.edit_handler(this.id);
        }
      }
    });
    this.delete_btn.addEventListener("click", (e) => {
      this.delete_handler(this.id);
    });
  }
}
