let INPUT = document.getElementsByClassName('input')[0];
let TODOFORM = document.getElementsByClassName('tasks')[0];

function addTask() {
    if (INPUT.value === '') {
        alert('Please enter a task');
        return;
    }

    let checkBox = document.createElement('label');
    checkBox.type = 'checkbox';
    checkBox.contentEditable = true;
    checkBox.innerHTML = `<input type="checkbox"> <span class="task-text">${INPUT.value}</span>`;
    TODOFORM.appendChild(checkBox);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    checkBox.appendChild(deleteButton);

    deleteButton.addEventListener('click', function() {
        this.parentNode.remove(); 
        saveTasks();
    });

    INPUT.value = '';
    saveTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', TODOFORM.innerHTML);
}

function showTasks() {
    let storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        TODOFORM.innerHTML = storedTasks;

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