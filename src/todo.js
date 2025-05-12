class ToDo{

    constructor(title, description, dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.checked = false; 
    }

    getTitle(){
        return this.title;
    }

    setTitleTo(newTitle){
        this.title = newTitle;
    }

    setDescriptionTo(newDescription){
        this.description = newDescription;
    }

    setDueDateTo(newDueDate){
        this.dueDate = newDueDate;
    }

    setCheckedToTrue(){
        this.checked = true;
    }

    equals(task){
        if(this.title == task.title && this.dueDate == task.dueDate)
            return true;
        return false;
    }
}

export default ToDo;