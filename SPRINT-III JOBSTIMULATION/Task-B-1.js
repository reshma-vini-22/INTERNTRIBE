const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearAllBtn = document.getElementById("clearAllBtn");

function updateTaskCount() {
  const remaining = document.querySelectorAll("li:not(.completed)").length;
  taskCount.textContent = `${remaining} task${remaining !== 1 ? "s" : ""} remaining`;
}

function createTaskElement(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = text;

  span.addEventListener("click", () => {
    span.classList.toggle("completed");
    li.classList.toggle("completed");
    updateTaskCount();
  });

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.textContent = "✏";
  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText;
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "🗑";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
    updateTaskCount();
  });

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);
  return li;
}

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = createTaskElement(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = "";
    updateTaskCount();
  }
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});

clearAllBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
  updateTaskCount();
});

/* 
  Edit Button Logic: When clicked, shows a prompt with the current task text, allowing inline edit.
  Delete Button Logic: Removes the task's parent list item from the DOM when clicked.
*/

updateTaskCount();