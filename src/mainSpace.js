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
    
        // Optional: add event listener
        checkBox.addEventListener('change', () => {
            if (checkBox.checked) {
                label.style.textDecoration = 'line-through';
            } else {
                label.style.textDecoration = 'none';
            }
        });
    
        // Create label or text
        const label = document.createElement('span');
        label.textContent = tdName;
    
        // Append checkbox and label
        todoContainer.appendChild(checkBox);
        todoContainer.appendChild(label);

        const removeButton = document.createElement('button');
        removeButton.textContent = '✖';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', () => {
            // Remove the todo from the DOM
            todoContainer.remove();
            // remove the todo from the project list and the allProjects list
            project.deleteTodo(tdName);
            Pmanager.getAllProjects().deleteTodo(tdName);
        });
        todoContainer.appendChild(removeButton);
        allToDos.appendChild(todoContainer);
    });
}

export default renderMainSpace;