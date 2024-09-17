const inputBox = document.getElementById("inputField");
const addToDoButton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");

function addTask() {
  if (inputBox.value === "") {
    alert("please add task ");
  } else {
    const createLi = document.createElement("li");
    createLi.innerHTML = inputBox.value;
    toDoContainer.appendChild(createLi);

    // Add delete button
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    createLi.appendChild(span);

    inputBox.value = "";
    saveData();
  }
}

addToDoButton.addEventListener("click", addTask);

// Save data to local storage
function saveData() {
  localStorage.setItem("data", toDoContainer.innerHTML);
}

// Show Data and re-attach event listeners
function showData() {
  toDoContainer.innerHTML = localStorage.getItem("data");

  // Re-attach event listeners for tasks after loading from localStorage
  const tasks = toDoContainer.querySelectorAll("li");
  tasks.forEach((task) => {
    task.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
      }
    });

    // Re-attach event listener for delete button
    const span = task.querySelector("span");
    if (span) {
      span.addEventListener("click", function () {
        task.remove();
        saveData();
      });
    }
  });
}

// Call showData when the page loads
showData();
