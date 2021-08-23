//Capturamos la carga del formulario para su validacion con javascript
window.addEventListener('DOMContentLoaded', () => {document.getElementById('form-add-project').addEventListener('submit',validarFormulario);});

//Agregamos las funciones para validar el formulario

function validarFormulario(e) { 
    e.preventDefault(); 
    //Aqui se recogen los valores una vez se envie el formulario
    let projectName = document.getElementById('project_name').value;
    let leader = document.getElementById('leader').value;
    let begin = document.getElementById('begin_date').value;
    let end = document.getElementById('end_date').value;
    let description = document.getElementById('description').value;

    //Aqui se hacen las validaciones

    if (projectName.length == 0) {
        alert('Tu proyecto debe tener un nombre');
        projectName.focus();
        return;
    } else if (leader.length < 3) {
        alert('Tienes que escribir un nombre de usuario valido');
        leader.focus();
        return;
    } else if (begin.length == 0){
        alert('Debes poner una fecha de inicio valida');
        begin.focus();
        return;
    } else if (end.length == 0) {
        alert('Debes poner una fecha limite valia');
        end.focus();
        return;
    }else if (description.length < 50) {
        alert('Ponle una descripcion a tu proyecto de al menos 50 caracteres para brindar una vision más clara de tu proposito');
        description.focus();
        return;
    }
    addProject();
}

function addProject() {
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
        window.localStorage.setItem('projects', JSON.stringify(projectArray));
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
    }
    document.getElementById("form-add-project").reset();//Reiniciamos los valores del formulario

}



