import Project from './projects';
import Pmanager from './projectManager';

// Functionality, adding new project to side bar
function addNewProject(){
    const adderDiv = document.getElementById("PAdder-form");
    const form = document.createElement('form');
    const input = document.createElement('input');
    form.method = 'post';
    input.type = 'text';
    input.placeholder = "New Project";
    form.appendChild(input);
    adderDiv.appendChild(form);

    form.onsubmit = (e) => {
        e.preventDefault();
        let projectName = input.value;
        if (projectName === '') projectName = 'New Project';
        Pmanager.addProject(projectName);
        form.reset();
    };
}

export default addNewProject;
