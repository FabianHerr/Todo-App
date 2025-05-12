import addNewProject from "./projectAdder";
import NewToDo from "./toDoFetcher";
import renderSideBar from "./sideBar";
import renderMainSpace from "./mainSpace";


// New project in sidebar feature
const projectAdder = document.getElementById('ProjectAdder');
const PAdder_form = document.getElementById('PAdder-form');
projectAdder.addEventListener('click', ()=>{
    PAdder_form.innerHTML = '';
    addNewProject();
    PAdder_form.textContent = 'New Project';
    renderSideBar();
})

// New to do in main space feature

