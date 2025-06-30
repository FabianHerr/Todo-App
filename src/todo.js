class ToDo{

    constructor(title){
        this.title = title;
        this.checked = false; 
        this.project = null;
    }

    getTitle(){
        return this.title;
    }

    setTitleTo(newTitle){
        this.title = newTitle;
    }

    setCheckedToTrue(){
        this.checked = true;
    }

    setCheckedToFalse(){
        this.checked = false;
    }

    isChecked(){
        return this.checked;
    }

    getProject(){
        return this.project;
    }

    setProject(project){
        this.project = project;
    }

    equals(task){
        return this.title === task.title;
    }

    // Convert to plain object for storage
    toJSON(){
        return {
            title: this.title,
            checked: this.checked
        };
    }

    // Create from stored data
    static fromJSON(data){
        const todo = new ToDo(data.title);
        todo.checked = data.checked;
        return todo;
    }
}

export default ToDo;