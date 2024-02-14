let INPUT = document.getElementsByClassName('input')[0];
let TODOFORM = document.getElementsByClassName('tasks')[0];

// Function to add a new task when the "Add Task" button is clicked
function addTask() {
  if (INPUT.value === '') {
    alert('Please enter a task');
    return; // Exit early if no task is entered
  }

  // Create a new checkbox element with label and text input
  let chkBox = document.createElement('label');
  chkBox.type = 'checkbox';
  chkBox.contentEditable = true;
  chkBox.innerHTML = `
    <input type="checkbox">
    <span class="task-text">${INPUT.value}</span>
  `;
  TODOFORM.appendChild(chkBox);

  // Create a delete button and append it to the checkbox label
  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  chkBox.appendChild(deleteButton);

  // Add an event listener to the delete button
  deleteButton.addEventListener('click', function() {
    this.parentNode.remove(); // Remove the entire checkbox element
    saveTasks(); // Update localStorage
  });

  INPUT.value = ''; // Clear the input field
  saveTasks(); // Update localStorage after adding the task
}

// Function to save the current state of tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', TODOFORM.innerHTML);
}

// Function to retrieve and display tasks from localStorage
function showTasks() {
  let storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    TODOFORM.innerHTML = storedTasks;

    // Add event listeners to existing delete buttons on page load
    let deleteButtons = document.querySelectorAll('.tasks button');
    deleteButtons.forEach(button => {
      button.addEventListener('click', function() {
        this.parentNode.remove();
        saveTasks();
      });
    });
  }
}

// Show tasks on page load
showTasks();

// Event listener for "Add Task" button (if using a separate button)
document.getElementById('add-task-button').addEventListener('click', addTask); // Replace with ID of your button

