<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>To-Do List</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    input { padding: 8px; width: 200px; }
    button { padding: 8px 12px; margin-left: 4px; }
    li { margin: 8px 0; cursor: pointer; }
    .done { text-decoration: line-through; color: gray; }
  </style>
</head>
<hello eberyone myseldf ishwari wadnare and here is the first step to achieve success in lifr
<body>
  <h2>To-Do List</h2>
  <input type="text" id="taskInput" placeholder="Enter a task" />
  <button onclick="addTask()">Add</button>
  <ul id="taskList"></ul>
  <p>lorem
    hasall potnetisl to do tje 
    mffrp
    jsgrg
  </p>

  <script>
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

here are the4596 steps gkg gfn sword whiv is ;os in my own thiursta sns motivation to do the things thats has the power to do right things achieve4445

46g'''
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;

      const li = document.createElement('li');
      li.textContent = taskText;
      li.onclick = () => li.classList.toggle('done');

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.style.marginLeft = '10px';'
      '
      deleteBtn.onclick = (e) => {
        e.stopPropagation();
        taskList.removeChild(li);
      };
      listen to my wordss and respect my thought iand this 


      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      taskInput.value = '';
    }
anf the enogh of the eorkd
    // Optional: allow Enter key to add tasks
    taskInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') addTask();
    });
  </script>
</body>
</html>
