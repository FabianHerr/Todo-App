import ToDO from "./todo.js";
import Tmanager from "./toDoManager.js";

// Main Space functionality
function renderMainSpace(){
    const allToDos = document.getElementById('allToDos');
    allToDos.innerHTML = '';
    Tmanager.getProjects().forEach(td => {
        tdName = td.getName();
        const div = document.createElement('div');
        div.id = projectName;
        div.className = 'toDo';
        div.textContent = projectName;
        allToDos.appendChild(div);
    });
}

export default renderMainSpace;