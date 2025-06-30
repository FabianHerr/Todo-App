import addNewProject from "./projectAdder";
import addNewToDo from "./toDoFetcher";
import renderSideBar from "./sideBar";
import renderMainSpace from "./mainSpace";
import Pmanager from "./projectManager"
import './styles.css';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render - this will load data from storage
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
    });

    // Optional: Add a way to clear all data (for testing)
    // You can remove this in production
    const clearDataButton = document.createElement('button');
    clearDataButton.textContent = 'Clear All Data';
    clearDataButton.style.position = 'fixed';
    clearDataButton.style.bottom = '10px';
    clearDataButton.style.right = '10px';
    clearDataButton.style.padding = '5px 10px';
    clearDataButton.style.backgroundColor = '#d62828';
    clearDataButton.style.color = 'white';
    clearDataButton.style.border = 'none';
    clearDataButton.style.borderRadius = '5px';
    clearDataButton.style.cursor = 'pointer';
    clearDataButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all data?')) {
            Pmanager.clearStorage();
            renderSideBar();
            renderMainSpace();
        }
    });
    document.body.appendChild(clearDataButton);
});