document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("taskInput").focus();
});

let taskCounter = 1;

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const datetimeInput = document.getElementById("datetimeInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    const task = document.createElement("div");
    task.className = "task";
    task.innerHTML = `
        <span class="task-number">${taskCounter}.</span>
        <span class="task-text" contenteditable="false">${taskInput.value}</span>
        <span class="task-datetime" contenteditable="false">${datetimeInput.value}</span>
        <div class="task-btns">
            <button class="task-edit-btn" onclick="editTask(this)">Edit</button>
            <button class="task-delete-btn" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    taskList.appendChild(task);
    taskCounter++;
    taskInput.value = "";
    datetimeInput.value = "";
    taskInput.focus();
}

function editTask(button) {
    const taskText = button.parentElement.previousElementSibling.previousElementSibling;
    const taskDatetime = button.parentElement.previousElementSibling;
    
    taskText.contentEditable = !taskText.isContentEditable;
    taskDatetime.contentEditable = !taskDatetime.isContentEditable;

    // Change button text based on contentEditable state
    button.innerText = taskText.isContentEditable ? "Save" : "Edit";
}

function deleteTask(button) {
    const taskList = document.getElementById("taskList");
    const task = button.parentElement.parentElement;
    taskList.removeChild(task);
}