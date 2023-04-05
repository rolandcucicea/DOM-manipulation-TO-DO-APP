const submitButton = document.getElementById("submit");

function childButtons() {
    const edit = document.createElement("button");
    const del = document.createElement("button");
    edit.textContent = "Edit";
    edit.id = "edit-btn"
    del.textContent = "Delete";
    del.id = "del-btn";
    return {
        editButton: edit,
        deleteButton: del
    };
}

function addTasks(task) {
    const listElement = document.createElement("li");
    listElement.textContent = task;

    const buttons = childButtons();
    listElement.appendChild(buttons.editButton);
    listElement.appendChild(buttons.deleteButton);

    const taskList = document.getElementById('task-list');
    taskList.appendChild(listElement);
    return taskList;
}

function editTask() {
    
}

function deleteTask() {

}

submitButton.addEventListener('click', () => {
    const task = document.getElementById('task').value;
    addTasks(task);
});

