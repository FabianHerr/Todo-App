import Project from './projects';

class ProjectManager{
    projects = [];
    currentProject = null;

    addProject(name){
        const project = new Project(name);
        this.projects.append(project);
    }

    removeProject(name){
        this.projects = this.projects.filter(project => project.getName() != name);
    }

    getProjects(){
        return this.projects;
    }
    getCurrentProject(){
        return currentProject
    }
    setCurrentProject(project){
        currentProject = project; 
    }
}

const Pmanager = new ProjectManager();

export default manager;

