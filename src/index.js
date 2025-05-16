import addNewProject from "./projectAdder";
import addNewToDo from "./toDoFetcher";
import renderSideBar from "./sideBar";
import renderMainSpace from "./mainSpace";
import Pmanager from "./projectManager"
import './styles.css';


// Initial Render
renderSideBar();
renderMainSpace();

// New project in sidebar feature
const projectAdder = document.getElementById('ProjectAdder');
projectAdder.addEventListener('click', () => {
    addNewProject();
});

// New to do in main space feature
const todoAdder = document.getElementById('ToDoAdder');
const TAdder_form = document.getElementById('TAdder-form');
todoAdder.addEventListener('click', ()=>{
    TAdder_form.innerHTML = '';
    addNewToDo();
})



