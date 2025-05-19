import Project from "./projects";
import Pmanager from "./projectManager";
import renderMainSpace from "./mainSpace";



// Side Bar functionality
function renderSideBar(){
    const allProjects = document.getElementById('allProjects');
    allProjects.innerHTML = '';
    const projectsList = Pmanager.getProjects();

    projectsList.forEach(project => {
        let projectName = project.getName();
        const div = document.createElement('div');
        div.id = projectName;
        div.className = 'project';
        div.textContent = projectName;
        div.addEventListener('click', ()=>{
            Pmanager.setCurrentProject(project);
            renderMainSpace(project);
        })

        const removeButton = document.createElement('button');
        removeButton.textContent = '✖';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', () => {
            // Remove the todo from the DOM
            div.remove();
            // remove the todo from the project list and the allProjects list
            Pmanager.getProjects().removeProject(projectName);
        });
        
        allProjects.appendChild(div);
    });

    
}

export default renderSideBar;