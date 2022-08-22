export default class Task {
  constructor(value, parent /* addHandler */) {
    this.id = Math.random();
    this.value = value;
    this.parent = parent;
    /* this.add = addHandler; */
  }

  generateTask() {
    // task node
    this.node = document.createElement("div");
    this.node.classList.add("task");

    // text element
    this.text = document.createElement("div");
    this.text.classList.add("task-text");
    this.text.innerText = this.value;

    // buttons

    this.buttons = document.createElement("div");
    this.buttons.classList.add("buttons");

    this.edit_btn = document.createElement("button");
    this.edit_btn.classList.add("edit-btn");
    this.edit_btn.textContent = "Изменить";
    this.delete_btn = document.createElement("button");
    this.delete_btn.classList.add("delete_btn");
    this.delete_btn.textContent = "Удалить";

    this.buttons.appendChild(this.edit_btn);
    this.buttons.appendChild(this.delete_btn);

    this.node.appendChild(this.text);
    this.node.appendChild(this.buttons);
  }

  renderTask() {
    this.parent.appendChild(this.node);
  }

  /* addTask() {
    this.add_handler();
  } */
}
