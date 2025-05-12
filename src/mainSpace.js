import ToDO from "./todo.js";
import Tmanager from "./toDoManager.js";
import Pmanager from './projectManager.js'

// Main Space functionality
function renderMainSpace(){
    project = Pmanager.getCurrentProject(); // get current project user is on.
    const allToDos = document.getElementById('allToDos');
    allToDos.innerHTML = '';
    project.forEach(td => {
        tdName = td.getName();
        const div = document.createElement('div');
        div.id = tdName;
        div.className = 'toDo';
        div.textContent = tdName;
        allToDos.appendChild(div);
    });
}

export default renderMainSpace;