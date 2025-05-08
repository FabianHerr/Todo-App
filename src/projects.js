import todo from './todo';

class project{
    list = [];

    constructor(name,color){
        this.name = name;
        this.color = color;
    }

    addTodo(newTodo){
        this.list.append(newTodo);
    }

    deleteTodo(task){
        this.list = this.list.filter(todo => !todo.equals(task));
    }

    setName(newName){
        this.name = newName;
    }

    setColor(newColor){
        this.color = newColor;
    }

}

export default project;