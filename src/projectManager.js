import Project from './projects';

class ProjectManager{
    projects = [];

    addProject(name){
        const project = new Project(name);
        projects.append(project);
    }

    removeProject(name){
        projects = projects.filter(project => project.getName() != name);
    }

    getProjects(){
        return projects;
    }
}

const manager = new ProjectManager();

export default manager;

