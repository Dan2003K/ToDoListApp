let addTaskBtn = document.querySelector('#addTaskBtn');

// Add Task Button runs addtaskItem function on click
addTaskBtn.addEventListener('click', addTaskItem);

/// Add Task Item to the List
function addTaskItem() {
    let taskInput = document.querySelector('#taskInput').value;
    let taskList = document.querySelector('#taskList');
    let newTaskItem = document.createElement('li');
    newTaskItem.classList = "taskItem";
    if (taskInput == '') {
        document.querySelector('#taskInput').placeholder = "Please enter a task !!!";
        document.querySelector('#taskInput').style.color = "red";
        return;
    } else {
        newTaskItem.innerHTML =
            `<input type="checkbox">
            <span>
            ${taskInput}
            </span>
            <section>
            <button class='editBtn'>Edit</button>
            <button class='delBtn'>Del</button>
                        </section>
        `;
        taskList.appendChild(newTaskItem);
    }
}

/// Delete Task
taskList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delBtn')) {
        e.target.closest('li').remove();
        console.log('Task Deleted');
    }
});