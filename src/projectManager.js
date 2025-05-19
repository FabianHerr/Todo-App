import Project from './projects';

class ProjectManager{
    allProjects = new Project('All') // All todos from every project
    allTodos = new Project('AllTodos');
    projects = [];
    currentProject = this.allTodos;

    addTodoToAll(todo){
        this.allProjects.addTodo(todo);
    }

    getAllProjects(){
        return this.allProjects;
    }

    getAllTodos(){
        return this.allTodos;
    }

    createAddProject(name){
        const project = new Project(name);
        this.projects.push(project);
    }

    removeProject(name){
        this.projects = this.projects.filter(project => project.getName() != name);
    }

    getProjects(){
        return this.projects;
    }
    getCurrentProject(){
        return this.currentProject;
    }
    setCurrentProject(project){
        this.currentProject = project; 
    }
}

const Pmanager = new ProjectManager();
const allProjects = Pmanager.getAllProjects();
Pmanager.getProjects().push(allProjects);

export default Pmanager;

