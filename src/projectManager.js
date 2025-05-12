import Project from './projects';

class ProjectManager{
    allTodos = new Project('All');
    projects = [];
    currentProject = this.allTodos;

    addTodoToAll(todo){
        this.allTodos.addTodo(todo);
    }

    getAllTodos(){
        return this.allTodos;
    }

    addProject(name){
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

export default Pmanager;

