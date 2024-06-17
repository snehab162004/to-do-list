//get neccessary elements

const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

//function to add a task

function addTask() {
    const taskText = taskInput.value;

    if(taskText) {
    //create a new list item
    const taskItem = document.createElement("li");
    taskItem.innerText = taskText;
    taskItem.classList.add("task-item");
    
    //add event listener to mark task as completed 
    taskItem.addEventListener("click", function() {
       taskItem.classList.toggle("completed");
    });

    //add a delete btn to remove task
    const deleteBtn = document.createElement("Button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");

    //add event listener to delete a task
    deleteBtn.addEventListener("click", function(event) {
        event.stopPropagation();
        taskItem.remove();
    });

    //append the delete btn to the task item
    taskItem.appendChild(deleteBtn);

    //append the task item to the task list
    taskList.appendChild(taskItem);

    //clear the input field
    taskInput.value = "";
}
}

//add eventListener to the button 
addBtn.addEventListener("click", addTask);

//add eventListener to the input field for pressing enter key
taskInput.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        addTask();
    }
});