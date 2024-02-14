let inputForm = document.getElementsByClassName('input')[0];
let toDoForm = document.getElementsByClassName('tasks')[0];

function addTask() {
    if (inputForm.value === '') {
        alert('Please enter a task');
        return;
    }

    let checkBox = document.createElement('label');
    checkBox.innerHTML = `<input type="checkbox"> <span class="task-text" contenteditable="true">${inputForm.value}</span>`;
    toDoForm.appendChild(checkBox);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'deleteButton';
    deleteButton.contentEditable = false;
    checkBox.appendChild(deleteButton);

    inputForm.value = '';
    saveTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', toDoForm.innerHTML);
}

function showTasks() {
    let storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        toDoForm.innerHTML = storedTasks;

        let deleteButtons = document.querySelectorAll('.tasks button');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                this.parentNode.remove();
                saveTasks();
            });
        });
    }
}

showTasks();