import Project from './projects';
import Pmanager from './projectManager';
import renderSideBar from './sideBar';

// Functionality, adding new project to side bar
function addNewProject(){ 
    const PAdder_form = document.getElementById('PAdder-form');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'New Project';
    input.style.border = 'none';
    input.style.background = 'transparent';
    input.style.color = 'inherit';
    input.style.font = 'inherit';
    input.style.width = '100%';
    input.style.outline = 'none';

    PAdder_form.innerHTML = '';
    PAdder_form.appendChild(input);
    input.focus();

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const projectName = input.value || 'New Project';
            Pmanager.addProject(projectName);
            renderSideBar();
        }
    });
}

export default addNewProject;
