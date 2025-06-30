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
        
        // Highlight current project
        if (project === Pmanager.getCurrentProject()) {
            div.style.backgroundColor = '#ca6501';
        }
        
        // Create label or text
        const label = document.createElement('span');
        label.textContent = projectName;
        div.appendChild(label);
    
        div.addEventListener('click', ()=>{
            // Remove highlight from all projects
            document.querySelectorAll('.project').forEach(p => {
                p.style.backgroundColor = '#d37904';
            });
            
            // Highlight selected project
            div.style.backgroundColor = '#ca6501';
            
            Pmanager.setCurrentProject(project);
            renderMainSpace();
        });
        
        // Don't add remove button for special projects (All and AllTodos)
        if(project !== Pmanager.getAllProjects() && project !== Pmanager.getAllTodos()){
            const removeButton = document.createElement('button');
            removeButton.textContent = '✖';
            removeButton.className = 'remove-button';
            removeButton.addEventListener('click', (e) => {
                e.stopPropagation(); // prevents triggering the project select
                
                // If we're deleting the current project, switch to AllTodos
                if (project === Pmanager.getCurrentProject()) {
                    Pmanager.setCurrentProject(Pmanager.getAllTodos());
                }
                
                // Remove project (this will save to storage)
                Pmanager.removeProject(projectName);
                
                // Re-render sidebar and main space
                renderSideBar();
                renderMainSpace();
            });
            
            div.appendChild(removeButton);
        }
        
        allProjects.appendChild(div);
    });
}

export default renderSideBar;