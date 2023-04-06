const submitButton = document.getElementById("submit");

function childButtons() {
  const edit = document.createElement("button");
  const del = document.createElement("button");
  edit.textContent = "Edit";
  edit.id = "edit-btn";
  del.textContent = "Delete";
  del.id = "del-btn";
  return {
    editButton: edit,
    deleteButton: del,
  };
}

function addTasks(task) {
  const listElement = document.createElement("li");
  const spanContainer = document.createElement('span');
  spanContainer.textContent = task;
  listElement.appendChild(spanContainer);

  const buttonContainer = document.createElement('span');
  const buttons = childButtons();
  buttonContainer.appendChild(buttons.editButton);
  buttonContainer.appendChild(buttons.deleteButton);

  listElement.appendChild(buttonContainer);
  

  const taskList = document.getElementById("task-list");
  taskList.appendChild(listElement);
  return taskList;
}

function buttonFunctionalities(e) {
  if (e.target.matches("#del-btn")) {
    const task = e.target.closest("li");
    task.remove();
  } else if (e.target.matches("#edit-btn")) {
    const inputTask = document.createElement("input");
    const listElement = e.target.closest("li");
    inputTask.value = listElement.firstChild.textContent;
    listElement.replaceWith(inputTask);
    inputTask.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const newText = document.createTextNode(inputTask.value);
        inputTask.replaceWith(listElement);
        const oldText = listElement.firstChild;
        listElement.replaceChild(newText, oldText);
      }
    });
  }
}

submitButton.addEventListener("click", () => {
  const task = document.getElementById("task").value;
  addTasks(task);
});

const taskList = document.querySelector("#task-list");
taskList.addEventListener("click", buttonFunctionalities);
