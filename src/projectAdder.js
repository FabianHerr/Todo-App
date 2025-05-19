import Project from './projects';
import Pmanager from './projectManager';
import renderSideBar from './sideBar';

// Functionality, adding new project to side bar
function addNewProject(){ 
    const PAdder_form = document.getElementById('PAdder-form');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'New Project';

    PAdder_form.innerHTML = '';
    PAdder_form.appendChild(input);
    input.focus();

    // Makes sure the UI is back to normal when clicking outside the input box
    function handleOutsideClick(event){
        if(event.target != input){ 
            PAdder_form.innerHTML = 'New Project';
            document.removeEventListener('click', handleOutsideClick);
        }
    }

    setTimeout(()=>{document.addEventListener('click',handleOutsideClick)},0);


    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && input.value != '') {
            e.preventDefault();
            const projectName = input.value ;
            Pmanager.createAddProject(projectName);
            input.value = '';
            renderSideBar();
            
        }
    });
}

export default addNewProject;
