let inputForm = document.getElementsByClassName('input')[0];
let toDoForm = document.getElementsByClassName('tasks')[0];

function addTask() {
    if (inputForm.value === '') {
        alert('Please enter a task');
        return;
    }

    let checkBox = document.createElement('label');
    checkBox.type = 'checkbox';
    checkBox.contentEditable = true;
    checkBox.innerHTML = `<input type="checkbox"> <span class="task-text">${inputForm.value}</span>`;
    toDoForm.appendChild(checkBox);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    checkBox.appendChild(deleteButton);

    deleteButton.addEventListener('click', function() {
        this.parentNode.remove(); 
        saveTasks();
    });

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