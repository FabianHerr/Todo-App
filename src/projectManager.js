import Project from './projects';

class ProjectManager{
    projects = [];

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
}

const Pmanager = new ProjectManager();

export default manager;

