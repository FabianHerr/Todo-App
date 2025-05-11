import ToDo from './todo.js';

class ToDoManager{
    toDos = [];

    addToDo(name){
        const toDo = new ToDo(name);
        this.toDos.append(toDo);
    }

    removeToDo(name){
        this.toDos = this.toDos.filter(t => t.getTitle() != name);
    }

    getToDos(){
        return this.toDos;
    }
}

const Tmanager  = new ToDoManager();

export default Tmanager;

