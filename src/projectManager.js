import Project from './projects';
import ToDo from './todo';

class ProjectManager{
    constructor(){
        this.allProjects = new Project('All'); // All todos from every project
        this.allTodos = new Project('AllTodos');
        this.projects = [];
        this.currentProject = this.allTodos;
        
        // Load data from storage on initialization
        this.loadFromStorage();
    }

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
        this.saveToStorage();
    }

    removeProject(name){
        this.projects = this.projects.filter(project => project.getName() !== name);
        this.saveToStorage();
    }

    getProjects(){
        return this.projects;
    }

    getCurrentProject(){
        return this.currentProject;
    }

    setCurrentProject(project){
        this.currentProject = project; 
        // Save current project selection
        localStorage.setItem('currentProject', project.getName());
    }

    // Complete save to storage method
    saveToStorage(){
        try {
            // Save projects with their todos
            const serializedProjects = this.projects
                .filter(project => project.getName() !== 'All' && project.getName() !== 'AllTodos')
                .map(project => ({
                    name: project.getName(),
                    todos: project.list.map(todo => todo.toJSON())
                }));
            
            localStorage.setItem('projects', JSON.stringify(serializedProjects));
            
            // Save AllTodos separately
            const allTodosData = this.allTodos.list.map(todo => todo.toJSON());
            localStorage.setItem('allTodos', JSON.stringify(allTodosData));
            
            console.log('Data saved to storage');
        } catch (error) {
            console.error('Error saving to storage:', error);
        }
    }

    // Complete load from storage method
    loadFromStorage(){
        try {
            // Load projects
            const storedProjects = localStorage.getItem('projects');
            if (storedProjects) {
                const parsedProjects = JSON.parse(storedProjects);
                this.projects = parsedProjects.map(projectData => {
                    const project = new Project(projectData.name);
                    project.list = projectData.todos.map(todoData => {
                        const todo = ToDo.fromJSON(todoData);
                        todo.setProject(project);
                        return todo;
                    });
                    return project;
                });
            }

            // Load AllTodos
            const storedAllTodos = localStorage.getItem('allTodos');
            if (storedAllTodos) {
                const parsedTodos = JSON.parse(storedAllTodos);
                this.allTodos.list = parsedTodos.map(todoData => ToDo.fromJSON(todoData));
            }

            // Always include the special projects
            if (!this.projects.find(p => p.getName() === 'All')) {
                this.projects.push(this.allProjects);
            }
            if (!this.projects.find(p => p.getName() === 'AllTodos')) {
                this.projects.unshift(this.allTodos); // Add at beginning
            }

            // Restore current project selection
            const currentProjectName = localStorage.getItem('currentProject');
            if (currentProjectName) {
                const foundProject = this.projects.find(p => p.getName() === currentProjectName);
                if (foundProject) {
                    this.currentProject = foundProject;
                }
            }

            console.log('Data loaded from storage');
        } catch (error) {
            console.error('Error loading from storage:', error);
            // Initialize default projects if loading fails
            this.projects = [this.allTodos, this.allProjects];
        }
    }

    // Method to add todo and save to storage
    addTodo(todo, project = null){
        const targetProject = project || this.currentProject;
        targetProject.addTodo(todo);
        
        // Also add to AllTodos if it's not already AllTodos
        if (targetProject !== this.allTodos) {
            this.allTodos.addTodo(todo);
        }
        
        this.saveToStorage();
    }

    // Method to remove todo and save to storage
    removeTodo(todo){
        // Remove from all projects
        this.projects.forEach(project => {
            project.deleteTodo(todo);
        });
        this.saveToStorage();
    }

    // Method to update todo and save to storage
    updateTodo(todo){
        this.saveToStorage();
    }

    // Clear all data
    clearStorage(){
        localStorage.removeItem('projects');
        localStorage.removeItem('allTodos');
        localStorage.removeItem('currentProject');
        this.projects = [this.allTodos, this.allProjects];
        this.currentProject = this.allTodos;
    }
}

const Pmanager = new ProjectManager();

export default Pmanager;