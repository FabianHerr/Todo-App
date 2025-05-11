import ToDO from './todo.js';
import Tmanager from './toDoManager.js';

// Functionality, adding new project to side bar
function addNewToDo(){
    const adderDiv = document.getElementById("TAdder-form");
    const form = document.createElement('form');
    const input = document.createElement('input');
    form.method = 'post';
    input.type = 'text';
    input.placeholder = "New Task";
    form.appendChild(input);
    adderDiv.appendChild(form);

    form.onsubmit = (e) => {
        e.preventDefault();
        let toDoName = input.value;
        if (toDoName === '') toDoName = 'New Project';
        Tmanager.addProject(toDoName);
        form.reset();
    };
}

export default addNewToDo;