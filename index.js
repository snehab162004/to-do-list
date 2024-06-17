// Get necessary elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Function to add a task
function addTask() {
    const taskText = taskInput.value;

    if (taskText) {
        // Create a new list item
        const taskItem = document.createElement("li");
        taskItem.innerText = taskText;
        taskItem.classList.add("task-item");

        
        // Add a done button to mark task as completed
        const doneBtn = document.createElement("button");
        doneBtn.classList.add("done-btn");
        doneBtn.innerText = "DONE";

        doneBtn.addEventListener("click", function(event) {
            event.stopPropagation();
            taskItem.classList.toggle("completed");
            
            if (taskItem.classList.contains("completed")) {
                doneBtn.innerText = "Completed";
            } else {
                doneBtn.innerText = "Done";
            }
        });

    
        // Add a delete button to remove task
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete-btn");

        // Add event listener to delete a task
        deleteBtn.addEventListener("click", function(event) {
            event.stopPropagation();
            taskItem.remove();
        });

        // Append the done button to the task item
        taskItem.appendChild(doneBtn);

        // Append the delete button to the task item
        taskItem.appendChild(deleteBtn);

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    }
}

// Add eventListener to the button
addBtn.addEventListener("click", addTask);

// Add eventListener to the input field for pressing enter key
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
