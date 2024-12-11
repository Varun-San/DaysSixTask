let img = document.getElementById("img-empty");
function fun() {
  let inputval = document.getElementById("add").value;
  console.log(inputval);
  if (inputval === "") {
    alert("Please enter a task.");
    img.style.display = "block";
    return;
  }

  // Creating a new task
  let taskList = document.getElementById("task-list");
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  // Creating the checkbox for completing the task
  let taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.classList.add("task-checkbox");

  // Creating the task text
  let taskText = document.createElement("h2");
  taskText.classList.add("task-text");
  taskText.textContent = inputval;
  img.style.display = "none";

  // Creating the delete icon
  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-regular", "fa-trash-can", "task-delete");

  // Appending the checkbox, text, and delete icon to the task div
  taskDiv.appendChild(taskCheckbox);
  taskDiv.appendChild(taskText);
  taskDiv.appendChild(deleteIcon);

  // Appending the task div to the task list
  taskList.appendChild(taskDiv);

  // Clear input field after adding the task
  document.getElementById("add").value = "";

  // Mark task as completed when checkbox is clicked
  taskCheckbox.addEventListener("change", function () {
    if (taskCheckbox.checked) {
      taskText.style.color = "grey";
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.color = "black";
      taskText.style.textDecoration = "none";
    }
  });

  // Delete task when delete icon is clicked
  deleteIcon.addEventListener("click", function () {
    taskList.removeChild(taskDiv);
  });
}
