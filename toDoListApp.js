let taskListContainer = document.querySelector('.container');
let addTaskBtn = document.querySelector('#addTaskBtn');

// Add Task Button runs addtaskItem function on click
addTaskBtn.addEventListener('click', addTaskItem);

// Pressing Enter in the input runs addTaskItem()
taskInput.addEventListener('keydown', e => e.key === "Enter" ? addTaskItem() : null);

/// Add Task Item to the List
function addTaskItem() {
    let taskInput = document.querySelector('#taskInput');
    let taskList = document.querySelector('#taskList');
    let newTaskItem = document.createElement('li');
    newTaskItem.classList = "taskItem";
    if (taskInput.value == '') {
        document.querySelector('#taskInput').placeholder = "Please enter a task !!!";
        document.querySelector('#taskInput').style.color = "red";
        return;
    } else {
        newTaskItem.innerHTML =
            `<section>
             <input type="checkbox">
             <span></span>
             </section>
             <section>
             <button class="editBtn">Edit</button>
             <button class="delBtn">Del</button>
             </section>`;

        newTaskItem.querySelector('span').textContent = taskInput.value;
        taskList.appendChild(newTaskItem);
        taskInput.value = '';
        console.log('Task Added');
        document.querySelector('#taskInput').placeholder = "Add a new task...";
    }
}

let taskCompleted = document.querySelector('#CompletedTaskCounter');

let counter = 0;
taskCompleted.innerHTML = `Tasks Completed: ${counter}`;

taskList.addEventListener('click', function (e) {
    // Delete task
    if (e.target.classList.contains('delBtn')) {
        const li = e.target.closest('li');
        const checkbox = li.querySelector('input[type="checkbox"]');

        // If the task being deleted was completed, decrement the counter
        if (checkbox && checkbox.checked) {
            counter--;
        }

        li.remove();
        console.log('Task Deleted');
        taskCompleted.innerHTML = `Tasks Completed: ${counter}`;
        return; // stop further processing
    }

    // Completed tasks
    if (e.target.type === 'checkbox') {
        if (e.target.checked) {
            counter++;
            console.log('Task Completed');
        } else {
            counter--;
            console.log('Task Uncompleted');
        }
        taskCompleted.innerHTML = `Tasks Completed: ${counter}`;
    }
});
