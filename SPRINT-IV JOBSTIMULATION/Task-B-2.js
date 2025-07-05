const loadBtn = document.getElementById("loadBtn");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const delayBtn = document.getElementById("delayBtn");
const taskContainer = document.getElementById("taskContainer");
const notificationPanel = document.getElementById("notificationPanel");
const loadingDiv = document.getElementById("loading");

let tasks = [];
let intervalIds = [];

/**
 * Async loading simulation using setTimeout and Promise.
 * This function fetches fake task data with a simulated delay and displays "Loading..." during the wait.
 */
async function loadTasks() {
  loadingDiv.style.display = "block";
  taskContainer.innerHTML = "";
  notificationPanel.innerText = "";
  tasks = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Task 1", progress: 0, status: "Not Started" },
        { name: "Task 2", progress: 0, status: "Not Started" },
        { name: "Task 3", progress: 0, status: "Not Started" },
      ]);
    }, 2000);
  });

  loadingDiv.style.display = "none";
  tasks.forEach((task, index) => {
    const card = document.createElement("div");
    card.className = "task-card in-progress";
    card.id = `task-${index}`;
    card.innerHTML = `
      <h3>${task.name}</h3>
      <p>Status: <span class="status">${task.status}</span></p>
      <div class="progress-bar">
        <div class="progress"></div>
      </div>
    `;
    taskContainer.appendChild(card);
  });
}

function startProgress() {
  intervalIds = tasks.map((task, index) => {
    const id = setInterval(() => {
      if (task.progress < 100) {
        task.progress += 10;
        updateTaskCard(index);
      } else {
        clearInterval(id);
        task.status = "Completed";
        updateTaskCard(index);
      }
    }, 1000);
    return id;
  });
  startBtn.disabled = true;
}

function stopProgress() {
  intervalIds.forEach((id) => clearInterval(id));
  startBtn.disabled = false;
}

function updateTaskCard(index) {
  const card = document.getElementById(`task-${index}`);
  const task = tasks[index];
  const progressBar = card.querySelector(".progress");
  const statusText = card.querySelector(".status");

  progressBar.style.width = `${task.progress}%`;
  statusText.textContent = task.status;

  if (task.progress >= 100) {
    card.classList.remove("in-progress");
    card.classList.add("completed");
  }
}

function delayNotification() {
  setTimeout(() => {
    notificationPanel.innerText = "⚠ This is a delayed notification!";
  }, 3000);
}

// Event Listeners
loadBtn.addEventListener("click", loadTasks);
startBtn.addEventListener("click", startProgress);
stopBtn.addEventListener("click", stopProgress);
delayBtn.addEventListener("click", delayNotification);