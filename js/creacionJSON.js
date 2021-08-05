function addProject(e) {
    // Prevenimos el valor por defecto
    e.preventDefault();

    // Obtenemos los valores del formulario
    let projectName = document.getElementById('project_name').value;
    let projectImg = '../img/elmo.gif';
    let leader = document.getElementById('leader').value;
    let begin = document.getElementById('begin_date').value;
    let end = document.getElementById('end_date').value;
    let description = document.getElementById('description').value;

    if (window.sessionStorage.getItem('projects') === null) {
        const projectArray = [];
        const newProject = {
            'id': 0,
            'projectName': projectName,
            'projectImg': projectImg,
            'leader': leader,
            'beginDate': begin,
            'endDate': end,
            'description': description
        }

        projectArray.push(newProject);
        window.sessionStorage.setItem('projects', JSON.stringify(projectArray));
    }
    else {
        const projectArray = JSON.parse(window.sessionStorage.getItem('projects'));
        let newId = projectArray.length;
        const newProject = {
            'id': newId,
            'projectName': projectName,
            'projectImg': projectImg,
            'leader': leader,
            'beginDate': begin,
            'endDate': end,
            'description': description
        }
        
        projectArray.push(newProject);
        window.sessionStorage.setItem('projects', JSON.stringify(projectArray));
        console.log("hola " + newId);
    }
}

// Agregamos funcionalidad al boton de enviar de perfil de proyecto
const btnAddProject = document.getElementById("form-add-project");
btnAddProject.addEventListener('submit', addProject)

