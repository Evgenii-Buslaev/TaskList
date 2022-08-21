export default class Task {
  constructor(value, parent) {
    this.id = Math.random();
    this.value = value;
    this.parent = parent;
  }

  generateTask() {
    this.node = document.createElement("div");
    this.node.classList.add("task");
    this.node.innerText = this.value;
  }

  renderTask() {
    this.parent.appendChild(this.node);
  }
}
