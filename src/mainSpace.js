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
        todoContainer.textContent = tdName;
        allToDos.appendChild(todoContainer);
    });
}

export default renderMainSpace;