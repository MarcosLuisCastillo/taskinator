var pageContentE1 = document.querySelector ("#page-content");
var taskIdCounter = 0;
var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var tasksInProgressE1 = document.querySelector(#tasks-in-progress");
var tasksCompletedE1 = document.querySelector("#tasks-completed");

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
  
    //check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    formE1.reset();
    
    var isEdit = formE1.hasAttribute("data-task-id");

            // PUT THIS BELOW `var isEdit = ...` in `taskFormHandler()`

            // has data attribute, so get task id and call function to complete edit process
        if (isEdit) {
            var taskId = formEl.getAttribute("data-task-id");
            completeEditTask(taskNameInput, taskTypeInput, taskId);
        } 
             // no data attribute, so create object as normal and pass to createTaskEl function
        else {
            var taskDataObj = {
            name: taskNameInput,
            type: taskTypeInput;
            status: "to do"
        };
  
            createTaskEl(taskDataObj);
        }
};

var createTaskE1 = function(taskDataObj) {
    var createTaskActions = function(taskId) {
    var actionContainerE1 = document.createElement("div");
    actionContainerE1.className = "task-actions";
    }
        // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
}

var createTaskActions = function(taskId) {
    var actionContainerE1 = document.createElement("div");
        actionContainerE1.className = "task-actions";


        //create edit button
    var editButtonE1 = document.createElement("button");
    editButtonE1.textContent = "Edit";
    editButtonE1.className = "btn edit-btn";
    editButtonE1.setAttribute("data-task-id", taskId);

    actionContainerE1.appendChild(editButtonE1);gr

        // create delete button
    var deleteButtonE1 = document.createElement("button");
    deleteButtonE1.textContent = "Delete";
    deleteButtonE1.className = "btn delete-btn";
    deleteButtonE1.setAttribute("data-task-id", taskId);

    actionContainerE1.appendChild(deleteButtonE1);
    
    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);
    
    var statusChoices = ["To Do", "In Progress", "Completed"];

    for (var i=0; i < statusChoices.length; i++) {
        // create option element
        var statusOptionE1 = document.createElement("option");
        statusOptionE1 = document.createElement("option");
        statusOptionE1.textContent = statusChoices[i];
         
        //append to select
        statusSelectE1.appendChild(statusOptionE1);
    }
    actionContainerEl.appendChild(statusSelectEl);
    return actionContainerE1;
};

    // add task id as a custom attribute
    listItemE1.setAttribute("data-task-id", taskIdCounter);

    // create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);


var taskActionsE1 = createTaskActions(taskIdCounter);
    listItemE1.appendChild(taskActionsE1);


    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);

    taskDataObj.id = taskIdCounter;

    tasksCompletedE1.push(taskDataObj); 

    //increase task counter for next unique id
    taskIdCounter++
}

formE1.addEventListener("submit", createTaskHandler);

var taskButtonHandler = function(event) {
    /// get target element from event
    var targetE1 = event.target;

    //edit button was clicked
    if (targetE1.matches(".edit-btn")) {
        var taskId = targetE1.getAttribute("data-task-id");
        editTask(taskId);
    }

    // delete button was clicked 
    else if (targetE1.matches(".delete-btn")) {
        var taskId = targetE1.getAttribute("data-task-id");
        deleteTask(TaskId);
    }
};

pageContentE1.addEventListener("click," taskButtonHandler);

var completeEditTask = function(taskName, taskType, taskId) {
    //find the matching task list item
    var taskSelected = document.querySelector("".task-item[data-task-id='" + taskId + "']");

    //set new values
    taskSelected.querySelector("h3.task-name").textContent = taskName;
    taskSelected.querySelector("span.task-type").textContent = taskType;

    // loop through tasks array and task object with new content
    for (var i = 0; i < tasksCompletedE1.length; i++) {
        if (tasks[i].id === parseInt(taskId)) {
            tasks[i].name = taskName;
            tasks[i].type = taskType;
        }
    };
    alert("Task Updated!");

    formE1.removeAttribute("data-task-id");
    document.querySelector("#save-task").textContent = "Add Task";
};

var deleteTask = function(taskId) {
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    taskSelected.remove();
      

    if (event.target.matches(".delete-btn")) {
        var taskId = event.target.getAttribute("data-task-id");
        deleteTask(taskId);
    }

    //create new array to hold updated list of tasks
    var updatedTaskArr = [];

    //loop through current tasks
    for (var i=0; i < tasks.length; i++) {
        //if tasks[i].id doesnt match the value of taskId, let's keep that task and push it into the new arry
        if (tasks[i].id !== parseInt(taskId)) {
            updatedTaskArr.push(tasks[i]);
        }
    };
    // reassign tasks array to be the same as updatedTaskArr
};

    var editTask = function(taskId) {

        formE1.setAttribute("data-task-id", taskId);

        document.querySelector("#save-task").textContent = "Save Task";
    
        // get task list item element
        var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

        // get content from task name and type
        var taskName = taskSelected.querySelector("h3.task-name").textContent;
     

        var taskType = taskSelected.querySelector("span.task-type").textContent;
        document.querySelector("input[name='task-name']").value = taskName;
        document.querySelector("select[name='task-type']").value = taskType;
    };

    var saveTasks = function() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    var loadTasks = function() {
        savedTasks = localStorage.getItem("tasks");
      
        if (!savedTasks) {
          
          return false;
        }
      
        savedTasks = JSON.parse(savedTasks);

        //loop through savedTasks array 
        for (var i = 0; i < savedTasks.length; i++) {
            //pass each task object into the 'createTaskE1()' function
            createTaskE1(savedTasks[i]);
        }
      }
    pageContentE1.addEventListener("change", taskStatusChangeHandler);

    var taskStatusChangeHandler = function(event) {
        // get the task item's id
        var taskId = event.target.getAttribute("data-task-id");

        //get the currently selected option's value and convert to lowercase
        var statusValue = event.target.value.toLowerCase();

        // find the parent task item element based on the id
        var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']")
    };

