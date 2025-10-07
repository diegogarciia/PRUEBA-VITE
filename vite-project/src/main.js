const TaskManager = (function () {
  let tasks = [];

  return {
    addTask: function (text) {
      if (text.trim() === '') return;
      tasks.push({ text, completed: false });
    },

    listTasks: function () {
      return tasks.slice();
    },

    toggleTask: function (index) {
      if (tasks[index]) {
        tasks[index].completed = !tasks[index].completed;
      }
    },

    deleteTask: function (index) {
      if (tasks[index]) {
        tasks.splice(index, 1);
      }
    }
  };
})();

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function renderTasks() {
  taskList.innerHTML = '';
  const tasks = TaskManager.listTasks();

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';

    const span = document.createElement('span');
    span.textContent = task.text;

    const actions = document.createElement('div');
    actions.classList.add('actions');

    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = task.completed ? 'Desmarcar' : 'Completar';
    toggleBtn.onclick = () => {
      TaskManager.toggleTask(index);
      renderTasks();
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.onclick = () => {
      TaskManager.deleteTask(index);
      renderTasks();
    };

    actions.appendChild(toggleBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);
  });
}

addTaskBtn.addEventListener('click', () => {
  TaskManager.addTask(taskInput.value);
  taskInput.value = '';
  renderTasks();
});

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    TaskManager.addTask(taskInput.value);
    taskInput.value = '';
    renderTasks();
  }
});

renderTasks();
