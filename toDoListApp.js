/// Cache DOM elements
const taskListContainer = document.querySelector('.container');
const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');
const taskCompleted = document.querySelector('#CompletedTaskCounter');

let counter = 0;
taskCompleted.innerHTML = `Tasks Completed: ${counter}`;

/// Add Task on "Add" Button click or Enter key pressed
addTaskBtn.addEventListener('click', addTaskItem);
taskInput.addEventListener('keydown', e => e.key === "Enter" ? addTaskItem() : null);

/// Add New Task Item to the List
function addTaskItem() {
    if (taskInput.value.trim() == '') {
        document.querySelector('#taskInput').placeholder = "Please enter a task !!!";
        document.querySelector('#taskInput').style.color = "red";
        return;
    }

    /// Create new task item
    const newTaskItem = document.createElement('li');
    newTaskItem.classList = "taskItem";
    newTaskItem.innerHTML =
        `<section>
         <input type="checkbox">
         <span></span>
         </section>
         <section>
         <button class="editBtn">Edit</button>
         <button class="delBtn">Del</button>
         </section>`;

    /// Insert new task item into the list
    newTaskItem.querySelector('span').textContent = taskInput.value;
    taskList.appendChild(newTaskItem);
    taskInput.value = '';
    console.log('Task Added');

    /// Reset placeholder
    document.querySelector('#taskInput').placeholder = "Add a new task...";
}

/// Handle Delete & Completed toggle in one listener
taskList.addEventListener('click', e => {
    const li = e.target.closest('li');
    if (!li) return; // clicked outside <li>

    /// Delete Task
    if (e.target.classList.contains('delBtn')) {
        const checkbox = li.querySelector('input[type="checkbox"]');
        if (checkbox?.checked) counter--;
        li.remove();
        console.log('Task Deleted');
        updateCounter();
        return;
    }

    /// Toggle Completed
    if (e.target.type === 'checkbox') {
        counter += e.target.checked ? 1 : -1;
        console.log(e.target.checked ? 'Task Completed' : 'Task Uncompleted');
        updateCounter();
    }
});

/// Utility: update counter display
function updateCounter() {
    taskCompleted.textContent = `Tasks Completed: ${counter}`;
}
