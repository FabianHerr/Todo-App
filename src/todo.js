class todo{

    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = false; 
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

    setPriority(newPriority){
        this.priority = newPriority;
    }

    setCheckedToTrue(){
        this.checked = true;
    }
}

export default todo;