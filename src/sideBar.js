import Project from "./projects";
import Pmanager from "./projectManager";
import renderMainSpace from "./mainSpace";



// Side Bar functionality
function renderSideBar(){
    const allProjects = document.getElementById('allProjects');
    allProjects.innerHTML = '';
    Pmanager.getProjects().forEach(project => {
        let projectName = project.getName();
        const div = document.createElement('div');
        div.id = projectName;
        div.className = 'project';
        div.textContent = projectName;
        div.addEventListener('click', ()=>{
            Pmanager.setCurrentProject(project);
            renderMainSpace(project);
        })
        allProjects.appendChild(div);
    });
}

export default renderSideBar;