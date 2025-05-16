import ToDo from './todo.js';
import Project from './projects.js';
import Pmanager from './projectManager.js'
import renderMainSpace from './mainSpace.js';

// Functionality, adding new project to side bar
function addNewToDo(){
    let project = Pmanager.getCurrentProject(); // get current project user is on.
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
        if(event.target != name){ 
            adderDiv.innerHTML = 'New Task';
            document.removeEventListener('click', handleOutsideClick);
        }
    }

    setTimeout(()=>{document.addEventListener('click',handleOutsideClick)},0);


    name.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && name.value != '') {
            e.preventDefault();
            const todoName = name.value;
            const newTodo = new ToDo(todoName);
            project.addTodo(newTodo);
            name.value = '';
            renderMainSpace();
        }
    });
}

export default addNewToDo;