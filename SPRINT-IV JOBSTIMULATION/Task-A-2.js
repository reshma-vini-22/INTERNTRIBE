let task = [];
let interval = [];

async function loadTasks() {
    document.getElementById("start-btn").disabled = false;
    document.getElementById("task-area").innerHTML = "";
    document.getElementById("loading").style.display = "block";
    document.getElementById("notification").innerHTML = "";

    await new Promise(resolve => setTimeout(resolve, 2000));

    task = [];
    for (let i = 0; i < 3; i++) {
        task.push({ name: "Task-" + (i + 1), progress: 0, status: "Not Completed" });
    }

    displayTasks();
    document.getElementById("loading").style.display = "none";
}

function displayTasks() {
    let html = "";
    for (let i = 0; i < task.length; i++) {
        html += `
        <div id="task-${i}" class="taskCard">
            <p><b>${task[i].name}</b></p>
            <p>Status: <span id="status-${i}">${task[i].status}</span></p>
            <p>Progress: <span id="progress-${i}">${task[i].progress}</span>%</p>
            <div class="progress-container">
                <div class="progress-fill" id="progressline-${i}"></div>
            </div>
            
        </div>`;
    }
    document.getElementById("task-area").innerHTML = html;
}

function start() {
    stop(); 

    for (let i = 0; i < task.length; i++) {
        task[i].status = "In-Progress";
        updateTask(i);

        interval[i] = setInterval(() => {
            if (task[i].progress < 100) {
                task[i].progress += 10;
            } else {
                task[i].progress = 100;
                task[i].status = "Completed";
                clearInterval(interval[i]);
                
            }
            updateTask(i);
        }, 1000);
    }
}

function stop() {
    for (let i = 0; i < interval.length; i++) {
        clearInterval(interval[i]);
    }
    interval = [];
}

function updateTask(i) {
    const current = task[i];
    if (!current) return;

    const statusSpan = document.getElementById(`status-${i}`);
    const progressSpan = document.getElementById(`progress-${i}`);
    var progressLine = document.getElementById(`progressline-${i}`);

    if (statusSpan) statusSpan.innerText = current.status;
    if (progressSpan) progressSpan.innerText = current.progress;
    if (progressLine) progressLine.style.width = `${current.progress}%`;
    if(current.progress==100){
        progressLine.style.backgroundColor="green";
        document.getElementById(`task-${i}`).style.backgroundColor="rgb(104, 179, 104)"
    }
}

function delaynotify() {
    setTimeout(() => {
        document.getElementById("notification").innerText = "🔔 Reminder: Task in progress!";
    }, 3000);
}