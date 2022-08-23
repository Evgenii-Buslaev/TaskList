export default class Task {
  constructor(
    id,
    value,
    parent,
    addHandler,
    deleteHandler,
    renderChangesHandler
  ) {
    this.id = id;
    this.value = value;
    this.parent = parent;

    // handlers
    this.add_handler = addHandler;
    this.delete_handler = deleteHandler;
    this.render_changes = renderChangesHandler;
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

  renderTask() {
    this.parent.appendChild(this.node);
  }

  setHandlers() {
    this.edit_btn.addEventListener("click", () => {
      console.log("edit");
    });
    this.delete_btn.addEventListener("click", () => {
      this.delete_handler(this.id);
    });
  }
}
