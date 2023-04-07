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
  const spanContainer = document.createElement("span");
  spanContainer.textContent = task;
  listElement.appendChild(spanContainer);

  const buttonContainer = document.createElement("span");
  const buttons = childButtons();
  buttonContainer.appendChild(buttons.editButton);
  buttonContainer.appendChild(buttons.deleteButton);

  listElement.appendChild(buttonContainer);

  const taskList = document.getElementById("task-list");
  taskList.appendChild(listElement);
  return taskList;
}
function editTask(task) {
  const originalFormat = task.cloneNode(true);
  const inputField = document.createElement("input");
  inputField.value = task.firstChild.textContent;
  task.replaceChild(inputField, task.firstChild);
  inputField.focus();
  inputField.select();

  const editButton = task.querySelector("span").firstChild;
  const doneButton = editButton.cloneNode(true);
  doneButton.id = "done-btn";
  doneButton.textContent = "Done";
  task.querySelector("span").replaceChild(doneButton, editButton);
  doneButton.addEventListener("click", (e) => {
    originalFormat.firstChild.textContent = inputField.value;
    task.parentNode.replaceChild(originalFormat, task);
  });
}

function buttonFunctionalities(e) {
  if (e.target.matches("#del-btn")) {
    const task = e.target.closest("li");
    task.remove();
  } else if (e.target.matches("#edit-btn")) {
    const spanListElement = e.target.parentNode.parentNode;
    editTask(spanListElement);
  }
}

submitButton.addEventListener("click", () => {
  const task = document.getElementById("task").value;
  addTasks(task);
});

const taskList = document.querySelector("#task-list");
taskList.addEventListener("click", buttonFunctionalities);
