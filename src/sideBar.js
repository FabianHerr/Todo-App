import Project from "./projects";
import manager from "./projectManager";

// Side Bar functionality
function renderSideBar(){
    const allProjects = document.getElementById('allProjects');
    allProjects.innerHTML = '';
    manager.getProjects().forEach(project => {
        projectName = project.getName();
        const div = document.createElement('div');
        div.id = projectName;
        div.className = 'project';
        div.textContent = projectName;
        allProjects.appendChild(div);
    });
}

export default renderSideBar;