import ToDo from './todo.js';
import Project from './projects.js';
import Pmanager from './projectManager.js'
import renderMainSpace from './mainSpace.js';

// Functionality, adding new todo to current project
function addNewToDo(){
    const project = Pmanager.getCurrentProject(); // get current project user is on.
    const adderDiv = document.getElementById("TAdder-form");
    const name = document.createElement('input');
    name.type = 'text';
    name.placeholder = "New Task";
    name.id = 'todo-name';
    adderDiv.innerHTML = '';
    adderDiv.appendChild(name);
    name.focus();

    // Makes sure the UI is back to normal when clicking outside the input box
    function handleOutsideClick(event){
        if(event.target !== name){ 
            adderDiv.innerHTML = 'New Task';
            document.removeEventListener('click', handleOutsideClick);
        }
    }

    setTimeout(()=>{document.addEventListener('click',handleOutsideClick)},0);

    name.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && name.value.trim() !== '') {
            e.preventDefault();
            const todoName = name.value.trim();
            
            // Create new todo (simplified - no description or due date)
            const newTodo = new ToDo(todoName);
            newTodo.setProject(project);
            
            // Use the project manager's addTodo method which handles storage
            Pmanager.addTodo(newTodo, project);
            
            name.value = '';
            adderDiv.innerHTML = 'New Task';
            document.removeEventListener('click', handleOutsideClick);
            renderMainSpace();
        }
    });
}

export default addNewToDo;