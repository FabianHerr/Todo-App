import ToDo from './todo.js';
import Project from './projects.js';
import Pmanager from './projectManager.js'

// Functionality, adding new project to side bar
function addNewToDo(){
    let project = Pmanager.getCurrentProject(); // get current project user is on.
    const adderDiv = document.getElementById("TAdder-form");
    const form = document.createElement('form');
    const name = document.createElement('input');
    const desc = document.createElement('input');
    const dueDate = document.createElement('input');
    form.method = 'post';
    name.type = 'text';
    name.placeholder = "New Task";
    name.id = 'todo-name';
    desc.type = 'text';
    desc.placeholder = "Description of the task...";
    desc.id = 'todo-description';
    dueDate.type = 'date';
    dueDate.id = 'due-date';
    form.appendChild(name);
    form.appendChild(desc);
    form.appendChild(dueDate);
    adderDiv.appendChild(form);

    form.onsubmit = (e) => {
        e.preventDefault();
        let todoName = name.value;
        let todoDesc = desc.value;
        let todoDD = dueDate.value;

        if (todoName === '') todoName = 'New Task';
        const todo = new ToDo(todoName, todoDesc, todoDD);
        project.addTodo(todo);
        Pmanager.addTodoToAll(todo);
        form.reset();  
    };
}

export default addNewToDo;