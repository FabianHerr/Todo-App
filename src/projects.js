import todo from './todo';

class Project{
    list = [];

    constructor(name){
        this.name = name;
        this.selected = false;
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

    select(){
        this.selected = true;
    }

    unselect(){
        this.selected = false;
    }

}

export default Project;