document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Escribe una tarea.");
        return;
    }

    const taskList = document.getElementById("taskList");

    // Crear el elemento de la tarea
    const taskItem = document.createElement("li");
    taskItem.classList.add("task");

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;
    taskContent.classList.add("task-text");
    taskItem.appendChild(taskContent);
    
     
    // Hacer que el texto sea editable directamente en el taskList
    taskContent.addEventListener("click", () => {
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = taskContent.textContent;
        editInput.classList.add("edit-input");

        // Crear el botón "Listo"
        const doneBtn = document.createElement("button");
        doneBtn.textContent = "Listo";
        doneBtn.classList.add("done-btn");

        // Reemplazar el texto por el campo de edición y el botón "Listo"
        taskItem.replaceChild(editInput, taskContent);
        taskItem.appendChild(doneBtn);

        // Cuando el usuario haga clic en "Listo", guardar el nuevo texto
        doneBtn.addEventListener("click", () => {
            const newText = editInput.value.trim();
            if (newText !== "") {
                taskContent.textContent = newText;
            } else {
                taskContent.textContent = taskText; // Si el campo está vacío, se mantiene el texto original
            }

            // Reemplazar el campo de edición con el texto actualizado
            taskItem.replaceChild(taskContent, editInput);
            taskItem.removeChild(doneBtn); 
        });

        // Enfoque para que el usuario pueda comenzar a escribir
        editInput.focus();
    });



    // Botón de completar
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔️";
    completeBtn.classList.add("complete-btn");
    completeBtn.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });

    // Botón de eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(completeBtn);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = ""; 
}
