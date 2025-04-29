function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;
  
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }
  
    const taskList = document.getElementById('taskList');
  
    // Create new list item
    const li = document.createElement('li');
  
    // Add task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
  
    // Create delete button
    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = '❌';
    deleteBtn.className = 'delete';
    deleteBtn.onclick = function() {
      li.remove();
    };
  
    // Mark task as completed on click
    taskSpan.onclick = function() {
      taskSpan.classList.toggle('completed');
    };
  
    // Add the task and delete button to the list item
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
  
    // Add the list item to the task list
    taskList.appendChild(li);
  
    // Clear the input field
    taskInput.value = '';
  }