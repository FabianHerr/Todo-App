// Functionality, adding new project to side bar
function getProjectName(){
    const adderDiv = document.getElementById("Adder-form");
    const form = document.createElement('form');
    const input = document.createElement('input');
    form.method = 'post'
    input.type = 'text';
    input.placeholder = "New Project";
    form.appendChild(input);
    adderDiv.appendChild(form);

    //Get projectName
    const projectName = input.value ;

    if (projectName == ''){projectName = 'New Project'}

    return projectName;
}

export default getProjectName();
