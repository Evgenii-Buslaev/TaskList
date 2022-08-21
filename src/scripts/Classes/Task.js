export default class Task {
  constructor(value, parent) {
    this.id = Math.random();
    this.value = value;
    this.parent = parent;
  }

  generateTask() {
    // task node
    this.node = document.createElement("div");
    this.node.classList.add("task");
    this.node.innerText = this.value;

    // buttons
    this.edit_btn = document.createElement("button");
    this.edit_btn.classList.add("edit-btn");
    this.edit_btn.textContent = "Изменить";
    this.delete_btn = document.createElement("button");
    this.delete_btn.classList.add("delete_btn");
    this.delete_btn.textContent = "Удалить";

    this.node.appendChild(this.edit_btn);
    this.node.appendChild(this.delete_btn);
  }

  renderTask() {
    this.parent.appendChild(this.node);
  }
}
