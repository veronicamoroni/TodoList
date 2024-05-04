let tasks = [];

// Función para agregar una tarea
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        renderTasks();
        taskInput.value = "";
    }
}

// Función para renderizar las tareas 
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        listItem.innerHTML = `
        <div>
        <input type="checkbox" onchange="toggleTaskCompletion(${index})" ${task.completed ? 'checked' : ''} class="form-check-input" style="margin-right: 10px;">
        <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
        </div>
        <div>
        <button onclick="editTask(${index})" class="btn btn-info btn-sm mr-2">Editar</button>
        <button onclick="deleteTask(${index})" class="btn btn-danger btn-sm">Eliminar</button>
        </div>`;
        taskList.appendChild(listItem);
    });
}

// Función para eliminar una tarea
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Función para marcar o desmarcar una tarea como completada
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Función para editar una tarea
function editTask(index) {
    const newText = prompt("Editar tarea:", tasks[index].text);
    if (newText !== null) {
        tasks[index].text = newText.trim();
        renderTasks();
    }
}