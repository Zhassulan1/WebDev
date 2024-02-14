let INPUT = document.getElementsByClassName('input')[0];
let TODOFORM = document.getElementsByClassName('tasks')[0];

function addTask() {
    if (INPUT.value === '') {
        alert('Please enter a task');
        return;
    }

    // Create a new checkbox
    let chkBox = document.createElement('label');
    chkBox.type = 'checkbox';
    chkBox.contentEditable = true;
    chkBox.innerHTML = `<input type="checkbox"> <span class="task-text">${INPUT.value}</span>`;
    TODOFORM.appendChild(chkBox);

    // Create a delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    chkBox.appendChild(deleteButton);

    deleteButton.addEventListener('click', function() {
        this.parentNode.remove(); 
        saveTasks(); // Update localStorage
    });

    INPUT.value = ''; // Clear the input field
    saveTasks(); // Update localStorage after adding the task
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