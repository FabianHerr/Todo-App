import ToDO from "./todo.js";
import Pmanager from './projectManager.js'

// Main Space functionality
function renderMainSpace(){
    let project = Pmanager.getCurrentProject(); // get current project user is on.
    const allToDos = document.getElementById('allToDos');
    allToDos.innerHTML = '';
    
    project.list.forEach(td => {
        let tdName = td.getTitle();
    
        const todoContainer = document.createElement('div');
        todoContainer.id = "td-" + tdName;
        todoContainer.className = 'toDo';
    
        // Create checkbox
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.className = 'todo-checkbox';
        checkBox.checked = td.isChecked(); // Set initial state from stored data
    
        // Add event listener for checkbox changes
        checkBox.addEventListener('change', () => {
            if (checkBox.checked) {
                label.style.textDecoration = 'line-through';
                td.setCheckedToTrue();
            } else {
                label.style.textDecoration = 'none';
                td.setCheckedToFalse();
            }
            // Save the updated state
            Pmanager.updateTodo(td);
        });
    
        // Create label or text
        const label = document.createElement('span');
        label.textContent = tdName;
        
        // Apply line-through if already checked
        if (td.isChecked()) {
            label.style.textDecoration = 'line-through';
        }
    
        // Append checkbox and label
        todoContainer.appendChild(checkBox);
        todoContainer.appendChild(label);

        const removeButton = document.createElement('button');
        removeButton.textContent = '✖';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', () => {
            // Remove the todo from the DOM
            todoContainer.remove();
            
            // Remove from project manager (this will handle all projects and storage)
            Pmanager.removeTodo(td);
        });
        
        todoContainer.appendChild(removeButton);
        allToDos.appendChild(todoContainer);
    });
}

export default renderMainSpace;