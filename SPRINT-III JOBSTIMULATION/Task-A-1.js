
var todoInput = document.getElementById("todoInput");
var addBtn = document.getElementById("addBtn");
var container = document.querySelector(".container")
var todoList = document.getElementById("todoList");
var deleteBtn = document.getElementById("deleteBtn")
var editBtn = document.getElementById("editBtn")

addBtn.addEventListener("click", function (event) {
    if (todoInput.value != "") {
        var li = document.createElement("li")
        li.innerHTML = `<div><button id="one" onclick="checked(this)">❌</button><span>${todoInput.value}</span></div><div>
    <button id="editBtn" onclick="edited(this)">📝</button> <button id="deleteBtn" onclick="delete1(this)">🗑</button></div>`
        container.appendChild(li)
    }
    todoInput.value = ""
})

function delete1(button) {
    const li = button.closest("li")
    li.remove();
}

function edited(button) {
    const li = button.closest("li")
    var span = li.querySelector("span");
    const editedText = prompt("Edit Task:", span.textContent)
    if (editedText != "" && editedText.trim() != "") {
        span.textContent = editedText;
    }
}

function checked(button) {
    const li = button.closest("li")
    var span = li.querySelector("span");
    span.style.textDecoration = "line-through"
    span.style.color = "gray"
    button.style.backgroundColor = "green"
    button.textContent = "✔"
    button.style.fontSize = "10px"
}
