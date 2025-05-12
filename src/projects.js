import todo from './todo';

class Project{
    list = [];

    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    addTodo(newTodo){
        this.list.push(newTodo);
    }

    deleteTodo(task){
        this.list = this.list.filter(todo => !todo.equals(task));
    }

    setName(newName){
        this.name = newName;
    }

}

export default Project;