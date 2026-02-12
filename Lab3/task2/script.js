let taskInput = document.querySelector("#taskInput");
let addTaskButton = document.querySelector("#taskButton");
let taskList = document.querySelector("#taskList");

addTaskButton.addEventListener("click", function(){
    let taskText = taskInput.value.trim();
    if (taskText == ""){
        alert("Enter a task");
        return;
    }
    let taskItem = document.createElement("li");

    taskItem.innerHTML = `
        <input type="checkbox" class="checkTask">
        <span class="taskText">${taskText}</span>
        <button type="button" class="deleteButton">
            <img src="delete.png" width="15px">
        </button>
    `;

    taskItem.querySelector(".checkTask").addEventListener("change", function () {
        taskItem.querySelector(".taskText")
                .classList.toggle("completed");
    });

    taskItem.querySelector(".deleteButton").addEventListener("click", function () {
        taskItem.remove();
    });

    // taskItem.innerHTML = taskText;
    taskList.appendChild(taskItem);
    taskInput.value = "";

});
